import { Component, HostListener, OnInit  } from '@angular/core';
import { GithubService } from '../github-service.service';

@Component({
  selector: 'app-user-search',
  templateUrl: './users-search.component.html',
  styleUrls: ['./users-search.component.css']
})
export class UsersSearchComponent {
  [x: string]: any;
  user = {};
  termo: string = '';
  resultados: any;

  title = 'Usuários GitHub:';
  items: any[] = [];
  page = 1;

  isFooterHidden = false;
  scrollHeight = 30;
  http: any;

  
  @HostListener('window:scroll', [])
  onScroll() {
    if (window.pageYOffset > this.scrollHeight && !this.isFooterHidden) {
      this.isFooterHidden = true;
      const footer = document.querySelector('.footer') as HTMLElement;
      footer.classList.remove('footer-visible');
      footer.classList.add('footer-hidden');
    } else if (window.pageYOffset < this.scrollHeight && this.isFooterHidden) {
      this.isFooterHidden = false;
      const footer = document.querySelector('.footer') as HTMLElement;
      footer.classList.remove('footer-hidden');
      footer.classList.add('footer-visible');
    }
  };
  
  constructor(private githubService: GithubService) { 
    this.termo = '';
  }
  searchUsers() {
    this.githubService.searchUsers(this.termo).subscribe(results => {
      this.resultados = results;
    });
  }
}


