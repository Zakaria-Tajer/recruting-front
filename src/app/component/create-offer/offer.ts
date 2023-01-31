import {FormControl, Validators} from "@angular/forms";

export interface offerRequest {
  offreName: string | null | undefined;
  email?: string | null | undefined;
  educationLevel: string | null | undefined;
  city: string | null | undefined;
  description: string | null | undefined;
  profilSearching: string | null | undefined;
  salary: string | null | undefined; status: string
}
