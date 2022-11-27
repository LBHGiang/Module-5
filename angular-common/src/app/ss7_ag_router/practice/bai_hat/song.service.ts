import {Injectable} from '@angular/core';
import {Song} from './song';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  playlist: Song[] = [
    {
      id: 'IB-cnkBpz5M',
      name: 'Céline Dion - Ashes (from the Deadpool 2 Motion Picture Soundtrack)'
    },
    {
      id: 'IB-cnkBpz5M',
      name: 'Deadpool 2 - Take on Me'
    },
    {
      id: 'IB-cnkBpz5M',
      name: 'Nelly - Just A Dream'
    },
    {
      id: 'uelHwf8o7_U',
      name: 'Eminem - Love The Way You Lie ft. Rihanna'
    },
    {
      id: 'WpYeekQkAdc',
      name: 'The Black Eyed Peas - Where Is The Love?'
    }
  ];

  constructor() {
  }

  findSongById(id: string) {
    return this.playlist.find(item => item.id === id);
  }


}
