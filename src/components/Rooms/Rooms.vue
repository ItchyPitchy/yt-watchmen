<script lang="ts">
import { defineComponent, inject } from "vue"
import { collection, endBefore, getDocs, getFirestore, limit, limitToLast, orderBy, query, QueryConstraint, QueryDocumentSnapshot, startAfter, startAt, where, type DocumentData } from "firebase/firestore"
import type { Store } from "@/main"
import RoomList from "../Rooms/RoomList.vue"
import ContentSlideEffect from "../common/ContentSlideEffect.vue"
import CreateRoom from "./CreateRoom.vue"
import ColorSlideEffectVue from "../common/ColorSlideEffect.vue"
import LoadingCircle from "../common/LoadingCircle.vue";

export interface Room {
  host: string,
  name: string,
  videoId: string | null,
  state: "playing" | "paused",
  time: number,
  rate: number,
  createdAt: number,
  members: {}, // TODO: Change to correct type!
}

export interface Message {
  senderId: string,
  senderName: string,
  text: string,
}

export type RoomExtended = Room & {
  id: string,
}

interface State {
  roomPermissionsRoomIds: string[],
  tab: "private" | "public",
  rooms: RoomExtended[],
  isLoading: boolean,
  firstVisible: QueryDocumentSnapshot<DocumentData> | null,
  lastVisible: QueryDocumentSnapshot<DocumentData> | null,
  search: string,
  previousButtonHover: boolean,
  nextButtonHover: boolean,
  publicButtonHover: boolean,
  privateButtonHover: boolean,
  firstPage: boolean,
  lastPage: boolean,
}

const db = getFirestore()
const pageSize = 5

export default defineComponent({
  setup() {
    return {
      store: inject('store') as Store,
    }
  },
  data(): State {
    return {
      roomPermissionsRoomIds: [],
      tab: 'public',
      rooms: [],
      isLoading: false,
      firstVisible: null,
      lastVisible: null,
      search: '',
      previousButtonHover: false,
      nextButtonHover: false,
      publicButtonHover: false,
      privateButtonHover: false,
      firstPage: true,
      lastPage: false,
    }
  },
  watch: {
    // TODO: Is it possible to combine these 3 watchers to one handler?
    "search": {
      async handler() {
        this.isLoading = true;

        await this.fetchRooms([limit(pageSize + 1)]).then((docs) => {
          this.firstPage = true;

          if (docs.length > pageSize) {
            this.lastPage = false;
            docs.pop();
          } else {
            this.lastPage = true;
          }

          this.firstVisible = docs[0] || null;
          this.lastVisible = docs[docs.length - 1] || null;

          this.rooms = docs.map((doc) => ({
            id: doc.id,
            ...doc.data() as Room,
          }));
        }).finally(() => {
          this.isLoading = false;
        });
      }
    },
    "tab": {
      async handler() {
        if (this.isLoading) return;

        this.isLoading = true;

        await this.fetchRooms([limit(pageSize + 1)]).then((docs) => {
          this.firstPage = true;

          if (docs.length > pageSize) {
            this.lastPage = false;
            docs.pop();
          } else {
            this.lastPage = true;
          }

          this.firstVisible = docs[0] || null;
          this.lastVisible = docs[docs.length - 1] || null;

          this.rooms = docs.map((doc) => ({
            id: doc.id,
            ...doc.data() as Room,
          }));
        }).finally(() => {
          this.isLoading = false;
        });
      }
    },
  },
  async created() {
    this.isLoading = true;

    const permissionsRef = collection(db, 'permissions');
    const yourRoomPermissionsRef = query(permissionsRef, where('userId', '==', this.store.auth.userId));
    const snapshot = await getDocs(yourRoomPermissionsRef);
    const yourRoomPermissions = snapshot.docs.filter((doc) => doc.exists());
    this.roomPermissionsRoomIds = yourRoomPermissions.map((yourRoomPermissions) => yourRoomPermissions.data().roomPermissionId);

    await this.fetchRooms([limit(pageSize + 1)]).then((docs) => {
      this.firstPage = true;

      if (docs.length > pageSize) {
        this.lastPage = false;
        docs.pop();
      } else {
        this.lastPage = true;
      }

      this.firstVisible = docs[0] || null;
      this.lastVisible = docs[docs.length - 1] || null;

      this.rooms = docs.map((doc) => ({
        id: doc.id,
        ...doc.data() as Room,
      }));
    }).finally(() => {
      this.isLoading = false;
    });
  },
  methods: {
    getOrderByQueries() {
      const queries: QueryConstraint[] = [];

      if (this.search.length > 0) {
        queries.push(orderBy('name', 'asc'), orderBy('createdAt', 'desc'));
      } else {
        queries.push(orderBy('createdAt', 'desc'));
      }

      return queries;
    },
    getWhereQueries() {
      const queries: QueryConstraint[] = [];

      if (this.search.length > 0) {
        queries.push(where('name', '>=', this.search), where('name', '<=', this.search + '\uf8ff'));
      }

      switch (this.tab) {
        case 'private': {
          queries.push(where('type', '==', `${this.tab}`), where('permissionId', 'in', this.roomPermissionsRoomIds.length ? this.roomPermissionsRoomIds : ['']));
        }
        case 'public': {
          queries.push(where('type', '==', `${this.tab}`));
        }
      }

      return queries;
    },
    async onPageChange(action: 'previous' | 'next') {
      if (this.isLoading) return;

      let roomsDocs: QueryDocumentSnapshot<DocumentData>[] = [];

      switch (action) {
        case 'previous': {
          const queries = [endBefore(this.firstVisible), limitToLast(pageSize + 1)];

          this.isLoading = true;

          roomsDocs = await this.fetchRooms(queries).then(async (docs) => {
            this.lastPage = false;

            if (docs.length > pageSize) {
              this.firstPage = false;
              docs.shift();

              return docs;
            } else {
              this.firstPage = true;

              if (docs.length === pageSize) return docs;

              const queries = [startAt(docs[0]), limit(pageSize + 1)];

              return await this.fetchRooms(queries).then((docs2) => {
                if (docs2.length > pageSize) {
                  this.lastPage = false;
                  docs2.pop();
                } else {
                  this.lastPage = true;
                }

                return docs2;
              });
            }
          }).finally(() => {
            this.isLoading = false;
          });

          break;
        }
        case 'next': {
          const queries = [startAfter(this.lastVisible), limit(pageSize + 1)];

          this.isLoading = true;

          roomsDocs = await this.fetchRooms(queries).then((docs) => {
            this.firstPage = false;

            if (docs.length > pageSize) {
              this.lastPage = false;
              docs.pop();
            } else {
              this.lastPage = true;
            }

            return docs
          }).finally(() => {
            this.isLoading = false;
          });

          break;
        }
      }

      this.firstVisible = roomsDocs[0] || null;
      this.lastVisible = roomsDocs[roomsDocs.length - 1] || null;

      this.rooms = roomsDocs.map((doc) => ({
        id: doc.id,
        ...doc.data() as Room,
      }));
    },
    async fetchRooms(queries: QueryConstraint[] = []) {
      const roomsRef = query(
        collection(db, 'rooms'),
        ...this.getOrderByQueries(),
        ...this.getWhereQueries(),
        ...queries,
      );

      const documentSnapshots = await getDocs(roomsRef);
      const roomsDocs: QueryDocumentSnapshot<DocumentData>[] = [];

      documentSnapshots.forEach((doc) => {
        if (doc.exists()) {
          roomsDocs.push(doc)
        }
      });

      return roomsDocs;
    }
  },
  components: { RoomList, ContentSlideEffect, CreateRoom, ColorSlideEffectVue, LoadingCircle },
})
</script>

<template>
  <div class="page-wrapper">
    <CreateRoom />
    <div class="rooms-wrapper">
      <div class="container">
        <div class="room-list-wrapper">
          <div class="input-container" :style="{ marginBottom: '40px' }">
            <ColorSlideEffectVue :active="!firstPage && previousButtonHover" :inactive-bg-color="'#6200ff'"
              :inactive-text-color="'white'" :active-bg-color="'#310080'" :active-text-color="'white'">
              <template v-slot:element>
                <button @click="() => { !firstPage && onPageChange('previous') }" :class="{ disable: firstPage }"
                  @mouseover="previousButtonHover = true" @mouseleave="previousButtonHover = false">Previous</button>
              </template>
            </ColorSlideEffectVue>
            <ColorSlideEffectVue :active="!lastPage && nextButtonHover" :inactive-bg-color="'#6200ff'"
              :inactive-text-color="'white'" :active-bg-color="'#310080'" :active-text-color="'white'">
              <template v-slot:element>
                <button @click="() => { !lastPage && onPageChange('next') }" :class="{ disable: lastPage }"
                  @mouseover="nextButtonHover = true" @mouseleave="nextButtonHover = false">Next</button>
              </template>
            </ColorSlideEffectVue>
            <ColorSlideEffectVue :active="tab === 'public' || publicButtonHover" :inactive-bg-color="'#6200ff'"
              :inactive-text-color="'white'" :active-bg-color="'#310080'" :active-text-color="'white'">
              <template v-slot:element>
                <button @click="tab = 'public'" @mouseover="publicButtonHover = true"
                  @mouseleave="publicButtonHover = false">Public</button>
              </template>
            </ColorSlideEffectVue>
            <ColorSlideEffectVue :active="tab === 'private' || privateButtonHover" :inactive-bg-color="'#6200ff'"
              :inactive-text-color="'white'" :active-bg-color="'#310080'" :active-text-color="'white'">
              <template v-slot:element>
                <button @click="tab = 'private'" @mouseover="privateButtonHover = true"
                  @mouseleave="privateButtonHover = false">Private</button>
              </template>
            </ColorSlideEffectVue>
            <input v-model="search" placeholder="Search" />
          </div>
          <div :style="{ flexGrow: 1 }">
            <RoomList v-if="rooms.length" :rooms="rooms" />
            <p v-else>No rooms found</p>
          </div>
          <div class="loading-wrapper">
            <LoadingCircle v-if="isLoading" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/variables.scss";

.page-wrapper {
  display: flex;
}

.rooms-wrapper {
  flex: 1;
  padding: 50px 100px;
}

.container {
  margin: 0 auto;
  max-width: 1000px;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 5%;

  @media (min-width: 1000px) {
    flex-direction: row;
  }

  .room-list-wrapper {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
}

.input-container {
  display: flex;
  height: 40px;
  border-left: 1px solid white;
  border-right: 1px solid white;

  &>* {
    flex: 1;
  }
}

button {
  display: block;
  height: 100%;
  width: 100%;
  font-size: 16px;
  font-family: 'Poppins';
  font-weight: 600;
  padding: 5px 10px;
  border: 1px solid white;
  border-top: 2px solid white;
  border-bottom: 2px solid white;
  background: none;
  color: inherit;

  &.disable {
    opacity: 0.5;
  }
}

input {
  height: 100%;
  border-radius: 0;
  border: none;
  flex: 1;

  &:focus {
    outline: none;
  }
}

.loading-wrapper {
  display: flex;
  justify-content: center;
}
</style>
