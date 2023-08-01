import { Injectable, NgZone } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable({
  providedIn: "root",
})
export class SnackbarService {
  constructor(private snackBar: MatSnackBar, private zone: NgZone) {}

  successSnackBar(message: string) {
    this.zone.run(() => {
      const snackBarRef = this.snackBar.open(message, "Close", {
        horizontalPosition:"right",
        verticalPosition: "top",
        panelClass: "success-snackbar",
        duration: 3000,
      });
    });
  }
  public errorSnackBar(error: any) {
    this.zone.run(() => {
      this.snackBar.open(error ,"Close", {
        horizontalPosition: "right",
        verticalPosition: "top",
        panelClass: "error-snackbar",
        duration: 3000,
      });
    });
  }
}