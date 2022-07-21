import { Group } from "three";
import type { Context } from "../Context";

export class Entity {
  public object = new Group();

  public update(dt: number, elapsedTime: number, context: Context): void {
    // Intentionally left empty
  }
}