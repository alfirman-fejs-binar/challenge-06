import validateEmail from "../../utils/validateEmail";

describe("check validate function", () => {
  it("should validate email", () => {
    expect(validateEmail("admin")).toBeFalsy();
    expect(validateEmail("admin@")).toBeFalsy();
    expect(validateEmail("admin@admin")).toBeFalsy();
    expect(validateEmail("admin@admin.c")).toBeFalsy();
    expect(validateEmail("admin@admin.com")).toBeTruthy();
  });
});

async function signInWithEmail(email, password) {
  const raw = JSON.stringify({ email, password });
  try {
    const result = await fetch(
      "https://rent-cars-api.herokuapp.com/auth/login",
      { method: "POST", body: raw }
    );
    const data = await result.json();
    return data;
  } catch (e) {
    return e;
  }
}

describe("check auth API", () => {
  beforeEach(() => fetch.resetMocks());

  describe("success", () => {
    it("should be log in", async () => {
      const mockData = {
        name: "alfirman",
        email: "alfirman@admin.com",
        role: "admin",
      };
      const mockResponse = JSON.stringify(mockData);

      fetch.mockResponseOnce(mockResponse);

      const result = await signInWithEmail("admin@admin.com", "admin@admin");

      expect(result).toEqual(mockData);

      expect(fetch).toHaveBeenCalledTimes(1);
    });

    describe("failure", () => {
      it("returns null when exception", async () => {
        fetch.mockReject(() => Promise.reject("500 something went wrong"));

        const result = await signInWithEmail("admin@admin.com", "admin@admin");

        expect(result).toEqual("500 something went wrong");
      });
    });
  });
});
