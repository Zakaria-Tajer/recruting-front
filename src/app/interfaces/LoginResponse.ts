export interface LoginResponse {
    token: string | null;
    timestamp: Date;
    statusCode: number;
    statusMessage: string;
    message: string;

    loginInfo: {
      imagePic: String;
      username: String
    }

}
