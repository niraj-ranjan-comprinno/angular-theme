import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ThemeService {
  colorTheme = "light-theme";

  setTheme(className: string): void {
    console.log(className);
    // This is needed in order to add a class to the html tag to change the scrollbars
    const htmlTag = document.getElementById("htmlTag");

    if (htmlTag) {
      const classList = Array.from(htmlTag.classList);
      classList.forEach((cssClass) => htmlTag.classList.remove(cssClass));
      htmlTag.classList.add("theme", className);
      this.colorTheme = className;
    }
  }
}
