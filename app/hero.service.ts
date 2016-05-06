import { Injectable } from '@angular/core';

import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {
  getheroes() {
    return Promise.resolve(HEROES);
  }
}
