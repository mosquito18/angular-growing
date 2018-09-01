import { ChangeDetectionStrategy, Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-vedio',
    templateUrl: './vedio.component.html',
    styleUrls: ['./vedio.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class VedioComponent implements OnInit {

    sources: Array<Object>;
    
    @Input() id;
    constructor() {

    }

    ngOnInit() {
        this.sources = [
            {
                // singleVideo
                // src: `http://static.videogular.com/assets/videos/${this.id}.mp4`,
                src: "http://static.videogular.com/assets/videos/videogular.mp4",
                type: "video/mp4"
            },
            {
                src: "http://static.videogular.com/assets/videos/videogular.ogg",
                type: "video/ogg"
            },
            {
                src: "http://static.videogular.com/assets/videos/videogular.webm",
                type: "video/webm"
            }
        ];
    }

}
