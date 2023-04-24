import { Component, HostListener } from '@angular/core';
import { GithubService } from '../github-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './github-search.component.html',
  styleUrls: ['./github-search.component.css'],
})

export class ReposSearchComponent {
  searchQuery: string ='';
  searchResults: any;

  title = 'Repositórios GitHub:';
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
  }
  
  constructor(private githubService: GithubService) {
    this.searchQuery = ''; 
  }
  
  searchRepositories() {
    this.githubService.searchRepositories(this.searchQuery).subscribe(results => {
      this.searchResults = results;
    });
  }
}
