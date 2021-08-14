import { Component, OnInit } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'angular-material-theming-demo';
  theme = 'DeepPurple-light-theme';

  constructor(private overlayContainer: OverlayContainer) {}

  public ngOnInit(): void {
    this.overlayContainer.getContainerElement().classList.add(this.theme);
  }

  public onThemeChange(): void {
    const overlayContainerClasses =
      this.overlayContainer.getContainerElement().classList;
    console.log(overlayContainerClasses);

    const themeClassesToRemove = Array.from(overlayContainerClasses).filter(
      (item: string) => item.includes('-theme')
    );
    console.log(themeClassesToRemove);
    console.log(themeClassesToRemove.length);

    if (themeClassesToRemove.length) {
      overlayContainerClasses.remove(...themeClassesToRemove);
    }
    overlayContainerClasses.add(this.theme);
    console.log(this.theme);
  }
}
