import { Permission } from "./types/types";

let initialized = false;
let permissions: Permission[] = [];

/**
 *
 * @param {Permission[]} perms
 * @returns {string} response
 */
export function definePermissions(perms: Permission[]) {
  if (initialized) return "Permissions already initialized";
  initialized = true;
  permissions = perms;
  return "Permissions initialized";
}

export function getPermissions(perms: number | string[] | number[]) {
  if (!initialized) return console.error("Permissions not initialized");
  if (typeof perms === "number") {
    // console.log(convertFlagsToPermissions(perms));
    return convertFlagsToPermissions(perms);
  } else if (
    Array.isArray(perms) &&
    perms.every((p) => typeof p === "string")
  ) {
    let response: number[] = [];

    perms.forEach((p) => {
      let permission = permissions.find(
        (perm) => perm.name.toLowerCase() === p.toString().toLowerCase()
      );
      if (permission) {
        response.push(permission.access);
      }
    });
    return response;
  } else if (
    Array.isArray(perms) &&
    perms.every((p) => typeof p === "number")
  ) {
    let response: string[] = [];
    perms.forEach((p) => {
      let permission = permissions.find((perm) => perm.access === p);
      if (permission) {
        response.push(permission.name);
      }
    });
    return response;
  } else {
    console.error("Invalid argument");
  }
}

function convertFlagsToPermissions(flags: number): number[] {
  let perms: number[] = [];
  let i = 1;

  while (flags > 0) {
    if ((flags & 1) === 1) {
      perms.push(i);
    }
    flags >>= 1;
    i *= 2;
  }
  return perms;
}
