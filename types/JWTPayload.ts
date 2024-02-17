export type JWTPayload = {
  cmuAccount: string;
  firstName: string;
  lastName: string;
  studentId?: string;
  itaccounttype_id: string;
  itaccounttype_EN: string;
  organization_code: string;
  organization_name_EN: string;
  // role_name: string;
  // MAJOR_NAME_TH: string;
};