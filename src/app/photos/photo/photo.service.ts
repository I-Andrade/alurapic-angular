import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Photo } from "./photo";

@Injectable({
  providedIn: "root",
})
export class PhotoService {
  private API = "http://localhost:3000/";

  constructor(private http: HttpClient) {}

  listFromUser(userName: string) {
    return this.http.get<Photo[]>(this.API + userName + "/photos");
  }
}
