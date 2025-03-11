import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/dataFake';

@Component({
  selector: 'app-content',
  imports: [],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent implements OnInit{
  photoCover:string = "https://s2-valor.glbimg.com/6AluNgYKtLnLlFu879n1qabnlfA=/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_63b422c2caee4269b8b34177e8876b93/internal_photos/bs/2019/Z/F/A4uBECQrKTfnCngyQdqw/ca-05681-r.jpg"
  contentTitle:string = "Noticia da marvel homem de ferro volta dos mortos"
  contentDescription:string = "Marvel Anuncia novo homem de ferro"
  private id:string | null = "0"

  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
     this.id = value.get("id")
    )

    this.setValuesToComponents(this.id)
  }


  setValuesToComponents(id:string | null){
    const result = dataFake.filter(article => article.id === id)[0]

   this.contentTitle = result.title
   this.contentDescription = result.description
   this.photoCover = result.photo
  
  }

}
