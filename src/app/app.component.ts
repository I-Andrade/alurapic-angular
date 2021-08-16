import { Component, OnInit } from "@angular/core";

import { Photo } from "./photos/photo/photo";
import { PhotoService } from "./photos/photo/photo.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  constructor(private photoService: PhotoService) {}

  ngOnInit(): void {
    this.photoService
      .listFromUser("flavio")
      .subscribe((photos) => (this.photos = photos));
  }

  titulo = "AluraPic";

  photos: Photo[] = [];

  photos_old = [
    {
      url: "https://images7.alphacoders.com/519/thumb-1920-519145.jpg",
      descricao: "Naruto 1",
    },
    {
      url: "https://images.alphacoders.com/594/thumb-1920-594590.jpg",
      descricao: "Naruto 2",
    },
  ];
}
