import { Component } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


interface Course {
  label: string;
  value: string;
  credits: number;
}

interface Major {
  name: string;
  totalCredits: number;
  courses: Course[];
  additionCourseName: string;
  additionalCourses: Course[];
  additionalCourseTotalCredits: number;
  description: string;
}

@Component({
  selector: 'app-bachelors',
  imports: [
    CommonModule,
    MatSelectModule, // Add this import
    MatCheckboxModule, // Add this import
    FormsModule,],
  templateUrl: './bachelors.component.html',
  styleUrl: './bachelors.component.scss'
})
export class BachelorsComponent {
  majors: Major[] = [
    {
      name: 'Business Administration',
      totalCredits: 45,
      courses: [
        { label: 'Student Success Strategies (1 credit)', value: 'sss1', credits: 1 },
        { label: 'Spreadsheets for Leaders (3 credits)', value: 'sfl3', credits: 3 },
        { label: 'Management and Leadership Techniques (3 credits)', value: 'mlt3', credits: 3 },
        { label: 'Microeconomics (3 credits)', value: 'micro3', credits: 3 },
        { label: 'Macroeconomics (3 credits)', value: 'macro3', credits: 3 },
        { label: 'Organizational Behavior (3 credits)', value: 'ob3', credits: 3 },
        { label: 'Fundamentals of Accounting (3 credits)', value: 'fa3', credits: 3 },
        { label: 'Business Marketing (3 credits)', value: 'bm3', credits: 3 },
        { label: 'Business Statistics (3 credits)', value: 'bs3', credits: 3 },
        { label: 'Business Finance (3 credits)', value: 'bf3', credits: 3 },
        { label: 'Global Perspectives in Business (3 credits)', value: 'gpb3', credits: 3 },
        { label: 'Business Ethics and Law (3 credits)', value: 'bel3', credits: 3 },
        { label: 'Managing Human Resources (3 credits)', value: 'mhr3', credits: 3 },
        { label: 'Strategic Planning (3 credits)', value: 'sp3', credits: 3 }
      ],
      additionCourseName: '',
      additionalCourses: [],
      description: '',
      additionalCourseTotalCredits: 0
    },
    {
      name: 'Elementary Education',
      totalCredits: 54,
      courses: [
        { label: 'General Teaching Methods (2 credits)', value: 'gtm2', credits: 2 },
        { label: 'Inclusion & Inclusive Curricular Practices (3 credits)', value: 'iicp3', credits: 3 },
        { label: 'Social Studies (Grades PK-5) (4 credits)', value: 'sspk5_4', credits: 4 },
        { label: 'Math (Grades PK-5) (4 credits)', value: 'mathpk5_4', credits: 4 },
        { label: 'Science Curriculum, Instruction, and Assessment (Grades PK-5) (4 credits)', value: 'sciPK5_4', credits: 4 },
        { label: 'Developmental Literacy Lab (1 credit)', value: 'dll1', credits: 1 },
        { label: 'Developmental Literacy (3 credits)', value: 'dl3', credits: 3 },
        { label: 'Basics of Phonics Instruction (3 credits)', value: 'bpi3', credits: 3 },
        { label: 'Content Area Reading (3 credits)', value: 'car3', credits: 3 },
        { label: 'Classroom Management (4 credits)', value: 'cm4', credits: 4 },
        { label: 'Unit Planning (3 credits)', value: 'up3', credits: 3 },
        { label: 'EC/Integrated Field Experience (2 credits)', value: 'ecife2', credits: 2 },
        { label: 'Introduction to Multi-Cultural Education (3 credits)', value: 'imce3', credits: 3 },
        { label: 'Elementary Language Arts & Writing Methods (2 credits)', value: 'elawm2', credits: 2 },
        { label: 'Urban/Diverse Field Experience (2 credits)', value: 'udfe2', credits: 2 },
        { label: 'Upper Elementary Field Experience (1 credit)', value: 'uefe1', credits: 1 },
        { label: 'Student Teaching/Seminar (10 credits)', value: 'sts10', credits: 10 }
      ],
      additionCourseName: '',
      additionalCourses: [],
      description: '',
      additionalCourseTotalCredits: 0
    },
    {
      name: 'Online Bachelor of Arts (BA) in Elementary Education in Ohio',
      totalCredits: 37,
      courses: [
        { label: 'Student Success Strategies (1 credit)', value: 'sss1', credits: 1 },
        { label: 'Biblical Interpretation (3 credits)', value: 'bi3', credits: 3 },
        { label: 'Spiritual Formation and Discipleship (3 credits)', value: 'sfd3', credits: 3 },
        { label: 'Educational and Family Ministries (3 credits)', value: 'efm3', credits: 3 },
        { label: 'Pentateuch (3 credits)', value: 'pent3', credits: 3 },
        { label: 'Life and Letters of Paul (3 credits)', value: 'llp3', credits: 3 },
        { label: 'Mission and Evangelism (3 credits)', value: 'me3', credits: 3 },
        { label: 'Christian Heritage II (3 credits)', value: 'ch2_3', credits: 3 },
        { label: 'Preaching and Worship (3 credits)', value: 'pw3', credits: 3 },
        { label: 'Christian Theology I (3 credits)', value: 'ct1_3', credits: 3 },
        { label: 'Christian Theology II (3 credits)', value: 'ct2_3', credits: 3 },
        { label: 'Pastoral Theology and Practice (3 credits)', value: 'ptp3', credits: 3 },
        { label: 'Missional Church Leadership (3 credits)', value: 'mcl3', credits: 3 }
      ],
      additionCourseName: 'Ordination Concentration Curriculum',
      additionalCourses: [
        { label: 'Theology and Language of the Bible (3 credits)', value: 'tlb3', credits: 3 },
        { label: 'History & Polity of the Church of the Nazarene (2 credits)', value: 'hpcn2', credits: 2 },
        { label: 'Ministry in Diverse Contexts (2 credits)', value: 'mdc2', credits: 2 },
        { label: 'Christian Heritage I (3 credits)', value: 'chi3', credits: 3 },
        { label: 'Doctrine of Christian Holiness (2 credits)', value: 'dch2', credits: 2 },
        { label: 'Ministry Internship I (1 credit)', value: 'mii1', credits: 1 },
        { label: 'Ministry Internship II (1 credit)', value: 'mii2', credits: 1 }
      ],
      description: '',
      additionalCourseTotalCredits: 14
    },
    {
      name: 'Online Digital Marketing Degree Programs',
      totalCredits: 55,
      courses: [
        { label: 'Student Success Strategies (1 credit)', value: 'sss1', credits: 1 },
        { label: 'Spreadsheets for Leaders (3 credits)', value: 'sfl3', credits: 3 },
        { label: 'Management and Leadership Techniques (3 credits)', value: 'mlt3', credits: 3 },
        { label: 'Microeconomics (3 credits)', value: 'micro3', credits: 3 },
        { label: 'Macroeconomics (3 credits)', value: 'macro3', credits: 3 },
        { label: 'Organizational Behavior (3 credits)', value: 'ob3', credits: 3 },
        { label: 'Business Accounting (3 credits)', value: 'ba3', credits: 3 },
        { label: 'Business Marketing (3 credits)', value: 'bm3', credits: 3 },
        { label: 'Business Statistics (3 credits)', value: 'bs3', credits: 3 },
        { label: 'Business Finance (3 credits)', value: 'bf3', credits: 3 },
        { label: 'Global Perspectives in Business (3 credits)', value: 'gpb3', credits: 3 },
        { label: 'Business Ethics and Law (3 credits)', value: 'bel3', credits: 3 },
        { label: 'Managing Human Resources (3 credits)', value: 'mhr3', credits: 3 },
        { label: 'Strategic Planning (3 credits)', value: 'sp3', credits: 3 },
        { label: 'Social Media Marketing (3 credits)', value: 'smm3', credits: 3 },
        { label: 'Email Marketing (3 credits)', value: 'em3', credits: 3 },
        { label: 'SEO and SEM (3 credits)', value: 'seo3', credits: 3 },
        { label: 'Digital Marketing Analytics (3 credits)', value: 'dma3', credits: 3 },
        { label: 'Digital Marketing - Viral and Organic Growth (3 credits)', value: 'dmvog3', credits: 3 }
      ],
      additionCourseName: '',
      additionalCourses: [],
      description: '',
      additionalCourseTotalCredits: 0
    },
    {
      name: 'Online Bachelor of Business Administration (BBA) in Finance',
      totalCredits: 55,
      courses: [
        { label: 'Student Success Strategies (1 credit)', value: 'sss1', credits: 1 },
        { label: 'Spreadsheets for Leaders (3 credits)', value: 'sfl3', credits: 3 },
        { label: 'Management and Leadership Techniques (3 credits)', value: 'mlt3', credits: 3 },
        { label: 'Microeconomics (3 credits)', value: 'micro3', credits: 3 },
        { label: 'Macroeconomics (3 credits)', value: 'macro3', credits: 3 },
        { label: 'Organizational Behavior (3 credits)', value: 'ob3', credits: 3 },
        { label: 'Business Accounting (3 credits)', value: 'ba3', credits: 3 },
        { label: 'Business Marketing (3 credits)', value: 'bm3', credits: 3 },
        { label: 'Business Statistics (3 credits)', value: 'bs3', credits: 3 },
        { label: 'Business Finance (3 credits)', value: 'bf3', credits: 3 },
        { label: 'Global Perspectives in Business (3 credits)', value: 'gpb3', credits: 3 },
        { label: 'Business Ethics and Law (3 credits)', value: 'bel3', credits: 3 },
        { label: 'Managing Human Resources (3 credits)', value: 'mhr3', credits: 3 },
        { label: 'Strategic Planning (3 credits)', value: 'sp3', credits: 3 },
        { label: 'Investments (3 credits)', value: 'inv3', credits: 3 },
        { label: 'Financial Markets and Institutions (3 credits)', value: 'fmi3', credits: 3 },
        { label: 'Intermediate Business Finance (3 credits)', value: 'ibf3', credits: 3 },
        { label: 'Risk and Insurance (3 credits)', value: 'ri3', credits: 3 },
        { label: 'Personal Financial Planning (3 credits)', value: 'pfp3', credits: 3 }
      ],
      additionCourseName: '',
      additionalCourses: [],
      description: '',
      additionalCourseTotalCredits: 0
    },
    {
      name: 'BBA in Human Resource Management',
      totalCredits: 55,
      courses: [
        { label: 'Student Success Strategies (1 credit)', value: 'sss1', credits: 1 },
        { label: 'Spreadsheets for Leaders (3 credits)', value: 'sfl3', credits: 3 },
        { label: 'Management and Leadership Techniques (3 credits)', value: 'mlt3', credits: 3 },
        { label: 'Microeconomics (3 credits)', value: 'micro3', credits: 3 },
        { label: 'Macroeconomics (3 credits)', value: 'macro3', credits: 3 },
        { label: 'Organizational Behavior (3 credits)', value: 'ob3', credits: 3 },
        { label: 'Business Accounting (3 credits)', value: 'ba3', credits: 3 },
        { label: 'Business Marketing (3 credits)', value: 'bm3', credits: 3 },
        { label: 'Business Statistics (3 credits)', value: 'bs3', credits: 3 },
        { label: 'Business Finance (3 credits)', value: 'bf3', credits: 3 },
        { label: 'Global Perspectives in Business (3 credits)', value: 'gpb3', credits: 3 },
        { label: 'Business Ethics and Law (3 credits)', value: 'bel3', credits: 3 },
        { label: 'Managing Human Resources (3 credits)', value: 'mhr3', credits: 3 },
        { label: 'Strategic Planning (3 credits)', value: 'sp3', credits: 3 },
        { label: 'Training and Development (3 credits)', value: 'td3', credits: 3 },
        { label: 'Performance and Reward Systems (3 credits)', value: 'prs3', credits: 3 },
        { label: 'Employee Relations and Services (3 credits)', value: 'ers3', credits: 3 },
        { label: 'Diversity for Organizational Performance (3 credits)', value: 'dop3', credits: 3 },
        { label: 'Human Resource Strategy (3 credits)', value: 'hrs3', credits: 3 }
      ],
      additionCourseName: '',
      additionalCourses: [],
      description: '',
      additionalCourseTotalCredits: 0
    },
  {
    name: 'Online Bachelor of Business Administration (BBA) in Marketing',
    totalCredits: 55,
    courses: [
      { label: 'Student Success Strategies (1 credit)', value: 'sss1', credits: 1 },
      { label: 'Spreadsheets for Leaders (3 credits)', value: 'sfl3', credits: 3 },
      { label: 'Management and Leadership Techniques (3 credits)', value: 'mlt3', credits: 3 },
      { label: 'Microeconomics (3 credits)', value: 'micro3', credits: 3 },
      { label: 'Macroeconomics (3 credits)', value: 'macro3', credits: 3 },
      { label: 'Organizational Behavior (3 credits)', value: 'ob3', credits: 3 },
      { label: 'Business Accounting (3 credits)', value: 'ba3', credits: 3 },
      { label: 'Business Marketing (3 credits)', value: 'bm3', credits: 3 },
      { label: 'Business Statistics (3 credits)', value: 'bs3', credits: 3 },
      { label: 'Business Finance (3 credits)', value: 'bf3', credits: 3 },
      { label: 'Global Perspectives in Business (3 credits)', value: 'gpb3', credits: 3 },
      { label: 'Business Ethics and Law (3 credits)', value: 'bel3', credits: 3 },
      { label: 'Managing Human Resources (3 credits)', value: 'mhr3', credits: 3 },
      { label: 'Strategic Planning (3 credits)', value: 'sp3', credits: 3 },
      { label: 'Marketing Management (3 credits)', value: 'mm3', credits: 3 },
      { label: 'Personal Selling (3 credits)', value: 'ps3', credits: 3 },
      { label: 'Advertisements and Promotion (3 credits)', value: 'ap3', credits: 3 },
      { label: 'Marketing Strategy (3 credits)', value: 'ms3', credits: 3 },
      { label: 'Marketing Research (3 credits)', value: 'mr3', credits: 3 }
    ],
    additionCourseName: '',
    additionalCourses: [],
    description: '',
    additionalCourseTotalCredits: 0
  },
  {
    name: 'BBA in Project Management',
    totalCredits: 55,
    courses: [
      { label: 'Student Success Strategies (1 credit)', value: 'sss1', credits: 1 },
      { label: 'Spreadsheets for Leaders (3 credits)', value: 'sfl3', credits: 3 },
      { label: 'Management and Leadership Techniques (3 credits)', value: 'mlt3', credits: 3 },
      { label: 'Microeconomics (3 credits)', value: 'micro3', credits: 3 },
      { label: 'Macroeconomics (3 credits)', value: 'macro3', credits: 3 },
      { label: 'Organizational Behavior (3 credits)', value: 'ob3', credits: 3 },
      { label: 'Business Accounting (3 credits)', value: 'ba3', credits: 3 },
      { label: 'Business Marketing (3 credits)', value: 'bm3', credits: 3 },
      { label: 'Business Statistics (3 credits)', value: 'bs3', credits: 3 },
      { label: 'Business Finance (3 credits)', value: 'bf3', credits: 3 },
      { label: 'Global Perspectives in Business (3 credits)', value: 'gpb3', credits: 3 },
      { label: 'Business Ethics and Law (3 credits)', value: 'bel3', credits: 3 },
      { label: 'Managing Human Resources (3 credits)', value: 'mhr3', credits: 3 },
      { label: 'Strategic Planning (3 credits)', value: 'sp3', credits: 3 },
      { label: 'Operations Management (3 credits)', value: 'om3', credits: 3 },
      { label: 'Introduction to Project Management (3 credits)', value: 'ipm3', credits: 3 },
      { label: 'Project Planning (3 credits)', value: 'pp3', credits: 3 },
      { label: 'Project Execution, Monitoring & Control, Implementation & Closure (3 credits)', value: 'pemcic3', credits: 3 },
      { label: 'Advanced Project Management - Practicum (3 credits)', value: 'apmp3', credits: 3 }
    ],
    additionCourseName: '',
    additionalCourses: [],
    description: '',
    additionalCourseTotalCredits: 0
  },
  {
    name: 'Online Bachelor of Arts (BA) in Public Administration',
    totalCredits: 40,
    courses: [
      { label: 'Student Success Strategies (1 credit)', value: 'sss1', credits: 1 },
      { label: 'Spreadsheets for Leaders (3 credits)', value: 'sfl3', credits: 3 },
      { label: 'Management and Leadership Techniques (3 credits)', value: 'mlt3', credits: 3 },
      { label: 'Fundamentals of Accounting (3 credits)', value: 'fa3', credits: 3 },
      { label: 'Macroeconomics (3 credits)', value: 'macro3', credits: 3 },
      { label: 'Organizational Behavior (3 credits)', value: 'ob3', credits: 3 },
      { label: 'Leadership (3 credits)', value: 'lead3', credits: 3 },
      { label: 'Ethics and Law (3 credits)', value: 'el3', credits: 3 },
      { label: 'Managing Human Resources (3 credits)', value: 'mhr3', credits: 3 },
      { label: 'Applied Leadership Project (3 credits)', value: 'alp3', credits: 3 },
      { label: 'Introduction to Public Administration (3 credits)', value: 'ipa3', credits: 3 },
      { label: 'Public Service in Communities (3 credits)', value: 'psc3', credits: 3 },
      { label: 'Political Theory and Practice (3 credits)', value: 'ptp3', credits: 3 },
      { label: 'Public Policy (3 credits)', value: 'pp3', credits: 3 }
    ],
    additionCourseName: '',
    additionalCourses: [],
    description: '',
    additionalCourseTotalCredits: 0
  },
  {
    name: 'Bachelor of Arts (BA) in Leadership Online in Ohio',
    totalCredits: 40,
    courses: [
      { label: 'Student Success Strategies (1 credit)', value: 'sss1', credits: 1 },
      { label: 'Spreadsheets for Leaders (3 credits)', value: 'sfl3', credits: 3 },
      { label: 'Management and Leadership Techniques (3 credits)', value: 'mlt3', credits: 3 },
      { label: 'Fundamentals of Accounting (3 credits)', value: 'fa3', credits: 3 },
      { label: 'Macroeconomics (3 credits)', value: 'macro3', credits: 3 },
      { label: 'Organizational Behavior (3 credits)', value: 'ob3', credits: 3 },
      { label: 'Leadership (3 credits)', value: 'lead3', credits: 3 },
      { label: 'Ethics and Law (3 credits)', value: 'el3', credits: 3 },
      { label: 'Managing Human Resources (3 credits)', value: 'mhr3', credits: 3 },
      { label: 'Applied Leadership Project (3 credits)', value: 'alp3', credits: 3 },
      { label: 'Organizational Communication (3 credits)', value: 'oc3', credits: 3 },
      { label: 'Project Management (3 credits)', value: 'pm3', credits: 3 },
      { label: 'Advanced Law for Leaders (3 credits)', value: 'all3', credits: 3 },
      { label: 'Global Perspective (3 credits)', value: 'gp3', credits: 3 }
    ],
    additionCourseName: '',
    additionalCourses: [],
    description: '',
    additionalCourseTotalCredits: 0
  },
    {
      name: 'Online Bachelor of Business Administration (BBA) in Management',
      totalCredits: 55,
      courses: [
        { label: 'Student Success Strategies (1 credit)', value: 'sss1', credits: 1 },
        { label: 'Spreadsheets for Leaders (3 credits)', value: 'sfl3', credits: 3 },
        { label: 'Management and Leadership Techniques (3 credits)', value: 'mlt3', credits: 3 },
        { label: 'Microeconomics (3 credits)', value: 'micro3', credits: 3 },
        { label: 'Macroeconomics (3 credits)', value: 'macro3', credits: 3 },
        { label: 'Organizational Behavior (3 credits)', value: 'ob3', credits: 3 },
        { label: 'Business Accounting (3 credits)', value: 'ba3', credits: 3 },
        { label: 'Business Marketing (3 credits)', value: 'bm3', credits: 3 },
        { label: 'Business Statistics (3 credits)', value: 'bs3', credits: 3 },
        { label: 'Business Finance (3 credits)', value: 'bf3', credits: 3 },
        { label: 'Global Perspectives in Business (3 credits)', value: 'gpb3', credits: 3 },
        { label: 'Business Ethics and Law (3 credits)', value: 'bel3', credits: 3 },
        { label: 'Managing Human Resources (3 credits)', value: 'mhr3', credits: 3 },
        { label: 'Strategic Planning (3 credits)', value: 'sp3', credits: 3 },
        { label: 'Organizational Communication (3 credits)', value: 'oc3', credits: 3 },
        { label: 'New Venture Creation (3 credits)', value: 'nvc3', credits: 3 },
        { label: 'Operations Management (3 credits)', value: 'om3', credits: 3 },
        { label: 'Project Management (3 credits)', value: 'pm3', credits: 3 },
        { label: 'Advanced Business Law (3 credits)', value: 'abl3', credits: 3 }
      ],
      additionCourseName: '',
      additionalCourses: [],
      description: '',
      additionalCourseTotalCredits: 0
    },
    {
      name: 'Bachelor of Social Work (BSW)',
      totalCredits: 46,
      courses: [
        { label: 'Student Success Strategies (1 credit)', value: 'sss1', credits: 1 },
        { label: 'Foundations of Generalist Social Work Practice (3 credits)', value: 'fgswp3', credits: 3 },
        { label: 'Social Justice and Advocacy (3 credits)', value: 'sja3', credits: 3 },
        { label: 'Introduction to Statistics (3 credits)', value: 'is3', credits: 3 },
        { label: 'Social Science Research Methods (3 credits)', value: 'ssrm3', credits: 3 },
        { label: 'Human Behavior and the Social Environment I (3 credits)', value: 'hbse1_3', credits: 3 },
        { label: 'Social Work Practice with Individuals (3 credits)', value: 'swpi3', credits: 3 },
        { label: 'Human Behavior and the Social Environment II (3 credits)', value: 'hbse2_3', credits: 3 },
        { label: 'Social Work Practice with Groups (3 credits)', value: 'swpg3', credits: 3 },
        { label: 'Social Work Practice with Families (2 credits)', value: 'swpf2', credits: 2 },
        { label: 'Preparation for Field Education (1 credit)', value: 'pfe1', credits: 1 },
        { label: 'Social Work Practice with Organization and Communities (3 credits)', value: 'swpoc3', credits: 3 },
        { label: 'Analysis of Social Policy (3 credits)', value: 'asp3', credits: 3 },
        { label: 'Integrated Social Work Seminar (2 credits)', value: 'isws2', credits: 2 },
        { label: 'Social Work Practicum (10 credits)', value: 'swp10', credits: 10 },
        { label: 'Introduction to Mathematical Systems (3 credits)', value: 'ims3', credits: 3 },
        { label: 'Health and Wellness (3 credits)', value: 'hw3', credits: 3 },
        { label: 'Personal Finance (3 credits)', value: 'pf3', credits: 3 },
        { label: 'American Politics and Government (3 credits)', value: 'apg3', credits: 3 },
        { label: 'Social Problems (3 credits)', value: 'sp3', credits: 3 },
        { label: 'Human Biology (4 credits)', value: 'hb4', credits: 4 }
      ],
      additionCourseName: '',
      additionalCourses: [],
      description: '',
      additionalCourseTotalCredits: 0
    }
  ];


  // Controls for selection
  selectedMajor: Major | null = null;
  // Allow double major (checkbox) - if true, both majors are selected
  doubleMajor: boolean = false;
  // In case of double major, we store the second major (for simplicity, we allow user to select the other from list)
  secondMajor: Major | null = null;

  // Map to store selected course values for each major
  selectedCourses: { [majorName: string]: string[] } = {};

  // Total credits
  totalCredits: number = 0;

  // Conclusion message based on credit requirement
  conclusionMessage: string = '';

  // Called when a major is selected from the dropdown
  onMajorSelect() {
    // Reset selection for courses if major changes
    if (this.selectedMajor) {
      this.selectedCourses[this.selectedMajor.name] = [];
    }
    if (this.doubleMajor && this.secondMajor) {
      this.selectedCourses[this.secondMajor.name] = [];
    }
    this.totalCredits = 0;
    this.conclusionMessage = '';
  }

  // Called when a course checkbox is toggled for a given major
  onCourseChange(major: Major, courseValue: string, event: any) {
    const selectedList = this.selectedCourses[major.name] || [];
    if (event.checked) {
      selectedList.push(courseValue);
    } else {
      const idx = selectedList.indexOf(courseValue);
      if (idx > -1) {
        selectedList.splice(idx, 1);
      }
    }
    this.selectedCourses[major.name] = selectedList;
    this.calculateTotalCredits();
  }

  // Calculates total credits from the selected courses across majors
  calculateTotalCredits() {
    let total = 0;
    // For each major selected, add credits of courses selected
    for (const major of [this.selectedMajor, this.secondMajor]) {
      if (major) {
        const sel = this.selectedCourses[major.name] || [];
        const majorTotal = major.courses
          .filter(course => sel.includes(course.value))
          .reduce((sum, course) => sum + course.credits, 0);
        total += majorTotal;
      }
    }
    this.totalCredits = total;
    this.updateConclusion();
  }

  // Updates the conclusion message based on the requirements of the selected major(s)
  updateConclusion() {
    let req1 = this.selectedMajor ? this.selectedMajor.totalCredits : 0;
    let req2 = this.secondMajor ? this.secondMajor.totalCredits : 0;
    let totalReq = req1 + req2;
    if (totalReq === 0) {
      this.conclusionMessage = '';
      return;
    }
    if (this.totalCredits >= totalReq) {
      this.conclusionMessage = `Congratulations! You have met the required ${totalReq} credits.`;
    } else {
      this.conclusionMessage = `You have selected ${this.totalCredits} credits. You need ${totalReq - this.totalCredits} more credits to meet the requirement of ${totalReq}.`;
    }
  }

}
