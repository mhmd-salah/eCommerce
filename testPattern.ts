class AuthManager {
  private static instance: AuthManager;
  private data: Record<string, any> = {
    name: 'mohamed',
  };

  private constructor() {}

  public static getInstance(): AuthManager {
    if (!AuthManager.instance) {
      AuthManager.instance = new AuthManager();
    }
    return AuthManager.instance;
  }

  public getDate(key: string): string {
    return this.data[key];
  }
}

const auth = AuthManager.getInstance();

console.log(auth.getDate('name'));
