import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {

  isScreenAtStarting: boolean = true;
  relatedArticles = [{title: "Menopause and Metabolism", img: "assets/metabolism.jpg", url: "https://betterbody.co/blogs/health-articles/menopause-and-metabolism"},
  {title: "The Ultimate Menopause Survival Guide: How To Soothe The 24 Symptoms", img: "assets/Menopause-Women.jpg", url: "https://betterbody.co/blogs/health-articles/the-ultimate-menopause-survival-guide-how-to-soothe-the-24-symptoms"},
  {title: "Menopause Diet Plan to Lose Weight and Alleviate Other Symptoms", img: "assets/diet.jpg", url: "https://betterbody.co/blogs/health-articles/menopause-diet-plan-to-lose-weight-and-alleviate-other-symptoms"},
  {title: "Better Body’s Guide: Supporting Your Partner Through Menopause", img: "assets/partner.jpg", url: "https://betterbody.co/blogs/health-articles/better-body-s-guide-supporting-your-partner-through-menopause-1"}];

  @HostListener("window:scroll", []) onWindowScroll() {
    const verticalOffset = window.scrollY
      || document.documentElement.scrollTop
      || document.body.scrollTop || 0;

    if (verticalOffset > 200)
      this.isScreenAtStarting = false;
    else
      this.isScreenAtStarting = true;
  }

}
