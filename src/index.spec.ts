import { beforeAll, describe, expect, test } from "vitest";
import { definePermissions, getPermissions } from "./index";

const expectedNumericResponse = [1, 2, 4, 8];
const expectedStringResponse = ["Read", "Write", "Delete", "Modify"];

const expectedBadRequest = ["Read", 2, "Delete", 9];
const expectedBadResponse = "Invalid argument";

describe("index", function () {
  beforeAll(function () {
    let response = definePermissions([
      { access: 1, name: "Read" },
      { access: 2, name: "Write" },
      { access: 4, name: "Delete" },
      { access: 8, name: "Modify" },
    ]);
    expect(response).to.equal("Permissions initialized");
  });
  test('test definePermissions() expect "Permissions already initialized"', function () {
    let response = definePermissions([
      { access: 1, name: "Read" },
      { access: 2, name: "Write" },
      { access: 4, name: "Delete" },
      { access: 8, name: "Modify" },
    ]);
    expect(response).to.equal("Permissions already initialized");
  });

  test(`test getPermissions() with 15. Should return an array ${expectedNumericResponse}`, function () {
    let data = getPermissions(15);
    expect(data).to.deep.eq(expectedNumericResponse);
  });

  test(`test getPermissions() with ${expectedStringResponse}. Should return ${expectedNumericResponse}`, function () {
    let data = getPermissions(["read", "write", "Delete", "modify"]);
    expect(data).to.deep.eq(expectedNumericResponse);
  });

  test(`test getPermissions() with ${expectedNumericResponse}. Should return ${expectedStringResponse}`, function () {
    let data = getPermissions(expectedNumericResponse);
    expect(data).to.deep.eq(expectedStringResponse);
  });
});
