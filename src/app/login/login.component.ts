import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username = '';
  password = '';
  loading = false;
  errorMsg = '';

  constructor(private router: Router, private http: HttpClient) {}

  login() {
    if (!this.username || !this.password) {
      this.errorMsg = '⚠️ Please enter username and password';
      return;
    }

    this.loading = true;
    this.errorMsg = '';

    this.http.post<{ message: string; role: string }>(
      'http://localhost:5000/api/users/login',
      { username: this.username, password: this.password }
    ).subscribe({
      next: (res) => {
        this.loading = false;
        localStorage.setItem('role', res.role);
        localStorage.setItem('username', this.username);

        alert(`✅ Logged in as ${res.role}`);
        if (res.role === 'admin') this.router.navigate(['/admin']);
        else this.router.navigate(['/home']);
      },
      error: (err) => {
        this.loading = false;
        this.errorMsg = '❌ Invalid username or password';
      }
    });
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }
}
