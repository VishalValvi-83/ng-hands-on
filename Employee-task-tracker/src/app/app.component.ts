import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Employee Task Tracker';

  task = {
    empName: '',
    title: '',
    priority: '',
    dueDate: ''
  };

  tasks: (typeof this.task)[] = [];
  noTasks = true;
  checkNoTasks() {
    if (this.noTasks) {
      return 'No tasks available';

    } else {
      return '';

    }
  }

  addTask() {
    if (this.task.empName && this.task.title && this.task.priority && this.task.dueDate) {
      this.tasks.push({ ...this.task });

      this.task.empName = '';
      this.task.title = '';
      this.task.priority = '';
      this.task.dueDate = '';
      alert('Task added successfully');
      console.log(this.tasks);
    } else {
      alert('Please fill in all fields');
    }
  }

  getPriorityClass(priority: string) {
    return {
      'low-priority': priority === 'Low',
      'medium-priority': priority === 'Medium',
      'high-priority': priority === 'High'
    };
  }

  getFontSize(priority: string): string {
    if (priority === 'Low') return '14px';
    if (priority === 'Medium') return '16px';
    if (priority === 'High') return '18px';
    return '14px';
  }


}
