export interface LoginCredentials {
  email: string;
  password: string;
}

export interface User {
  id: number;
  fullname: string;
  email: string;
  password: string;
  verificationCode: string;
  isVerified: boolean;
}

export interface LoginApiResponse {
  success: boolean;
  message: string;
  data: User;
}

export interface RegisterCredentials {
  fullname: string;
  email: string;
  password: string;
}

export interface RegisterApiResponse {
  success: boolean;
  message: string;
  data: null;
}

export interface VerifyEmail {
  email: string;
  code: string;
}
export interface verifyEmailResponse {
  success: boolean;
  message: string;
  data: null;
}

export interface forgotpassword {
  email: string;
}

export interface forgotpasswordApiResponse {
  success: boolean;
  message: string;
  data: null;
}

export interface resetPassword {
  email: string;
  otp: string;
  newPassword: string;
}

export interface resetPasswordApiResponse {
  success: boolean;
  message: string;
  data: string;
}

export interface verifyOtp {
  email: string;
  otp: string;
}
