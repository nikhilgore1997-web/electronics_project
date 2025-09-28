// register.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  template: `
    <div class="register-container">
      <h2>⚡ Electronics Shop Registration</h2>

      <input type="text" placeholder="Username" [(ngModel)]="username" />
      <input type="password" placeholder="Password" [(ngModel)]="password" />

      <label>
        <input type="radio" name="role" value="user" [(ngModel)]="role" /> User
      </label>
      <label>
        <input type="radio" name="role" value="admin" [(ngModel)]="role" /> Admin
      </label>

      <button (click)="register()">Register</button>

      <p>
        Already have an account?
        <a (click)="goToLogin()">Login here</a>
      </p>
    </div>
  `,
  styles: [`
    .register-container {
      max-width: 400px;
      margin: 80px auto;
      padding: 20px;
      border: 1px solid #ccc;
      border-radius: 10px;
      text-align: center;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
      font-family: Arial, sans-serif;
    }
    input[type="text"], input[type="password"] {
      display: block;
      width: 90%;
      margin: 10px auto;
      padding: 8px;
      border-radius: 5px;
      border: 1px solid #aaa;
    }
    label {
      margin-right: 15px;
      font-weight: bold;
    }
    button {
      padding: 10px 20px;
      margin-top: 10px;
      cursor: pointer;
      border: none;
      border-radius: 5px;
      background-color: #28a745;
      color: white;
      font-weight: bold;
    }
    a {
      cursor: pointer;
      color: #007bff;
      text-decoration: underline;
    }
  `]
})
export class RegisterComponent {
  username = '';
  password = '';
  role: 'user' | 'admin' = 'user';

  constructor(private http: HttpClient, private router: Router) {}

  register() {
    if (!this.username || !this.password || !this.role) {
      alert('⚠️ Please fill all fields and select a role');
      return;
    }

    // POST to backend API
    this.http.post('http://localhost:5000/api/users/register', {
      username: this.username,
      password: this.password,
      role: this.role
    }).subscribe({
      next: () => {
        alert(`✅ Registered successfully as ${this.role}`);
        this.router.navigate(['/login']);
      },
      error: (err) => {
        console.error(err);
        alert('❌ Registration failed');
      }
    });
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}
