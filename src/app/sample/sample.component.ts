import { Component } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CommonModule } from '@angular/common';

interface Subcourse {
  label: string;
  value: string;
  credits: number;
  mandatory: boolean;
}

interface Course {
  mainheading: string;
  description: string;
  subdescription: string;
  heading: string;
  requirement: number; // mandatory number of subcourses required
  subcourses: Subcourse[];
}
@Component({
  selector: 'app-sample',
  imports: [MatSelectModule, MatCheckboxModule, CommonModule],
  templateUrl: './sample.component.html',
  styleUrl: './sample.component.scss'
})
export class SampleComponent {
  courses: Course[] = [
    // Preparatory Courses 
    {
      mainheading: '',
      description: '',
      subdescription: 'Preparatory courses are required only for certain students as noted.',
      heading: 'Preparatory Courses (Optional)',
      requirement: 0,
      subcourses: [
        {
          label: 'HUM-1013G:	Discipleship of the Christian Mind with Laboratory (3 credits)',
          value: 'hum1013g',
          credits: 3,
          mandatory: false
        },
        {
          label: 'CSS-1012:	Advanced College Success Strategies	(2 credits)',
          value: 'hum1012g',
          credits: 2,
          mandatory: false
        },
      ],
    },
    // Math Preparatory Courses 
    {
      mainheading: '',
      description: '',
      subdescription: 'Students with an ACT mathematics subscore of less than 17, an SAT mathematics subscore of less than 480, or an ALEKS PPL score of less than 30 must take MAT-0083. Students with an ACT mathematics subscore of 17 or 18, an SAT mathematics subscore of 480-520, or an ALEKS PPL score of 30-45 must take MAT-0093',
      heading: 'Math Preparatory Courses (Optional)',
      requirement: 0,
      subcourses: [
        {
          label: 'MAT-0083:	Basic Algebra	(3 credits)',
          value: 'mat0083g',
          credits: 3,
          mandatory: false
        },
        {
          label: 'MAT-0093:	Algebra	(3 credits)',
          value: 'mat0093',
          credits: 3,
          mandatory: false
        },
      ],
    },
    // 1. Gateway 2-3
    {
      mainheading: 'Common Core (17-22 credits)',
      description: '',
      subdescription: '',
      heading: 'Gateway (2-3 credits)',
      requirement: 1,
      subcourses: [
        {
          label: 'HUM-1012G: Discipleship of the Christian Mind (2 credits)',
          value: 'hum1012g',
          credits: 2,
          mandatory: false
        },
        {
          label: 'HUM-1013G: Discipleship of the Christian Mind with Laboratory (3 credits)',
          value: 'hum1013g',
          credits: 3,
          mandatory: false
        },
      ],
    },

    // 2. Foundations 9-12
    {
      mainheading: '',
      description: '',
      subdescription: 'BIB-1003 and BIB-1013: Both courses are required for School of Christian Ministry majors. All students outside of the School of Christian Ministry have the option to take both BIB-1003 and BIB-1013 in place of BIB-1023, but are not required to do so.',
      heading: 'Foundations (9-12 credits)',
      requirement: 1,
      subcourses: [
        {
          label: 'BIB-1023G: The Narrative of Scripture (3 credits)',
          value: 'bib1023g',
          credits: 3,
          mandatory: false
        },
        {
          label: 'BIB-1003G: Old Testament History & Literature (3 credits)',
          value: 'bib1003g',
          credits: 3,
          mandatory: false
        },
        {
          label: 'BIB-1013G: New Testament History & Literature (3 credits)',
          value: 'bib1013g',
          credits: 3,
          mandatory: false
        },
        {
          label: 'Mandatory! HIS-1013G: The Western Tradition in World Context (3 credits)',
          value: 'his1013g',
          credits: 3,
          mandatory: true
        },
        {
          label: 'Mandatory! THE-3003G: Christian Beliefs and Convictions (3 credits)',
          value: 'the3003g',
          credits: 3,
          mandatory: true
        },
      ],
    },

    // 3. Vocation and Service
    {
      mainheading: '',
      description: '',
      subdescription: '',
      heading: 'Vocation and Service (4 credits)',
      requirement: 2,
      subcourses: [
        {
          label: 'Mandatory! COR-2003G: Exploring Vocation I: Living a Called Life (3 credits)',
          value: 'cor2003g',
          credits: 3,
          mandatory: true
        },
        {
          label: 'Mandatory! COR-3001G: Exploring Vocation II: Called to Serve (1 credit)',
          value: 'cor3001g',
          credits: 1,
          mandatory: true
        },
      ],
    },

    // 4. Capstone
    {
      mainheading: '',
      description: '',
      subdescription: '',
      heading: 'Capstone (3 credits)',
      requirement: 1,
      subcourses: [
        {
          label: 'Mandatory! ITD-5013G: Contemporary Concerns (3 credits)',
          value: 'itd5013g',
          credits: 3,
          mandatory: true
        },
      ],
    },

    // 5. Competencies 10-15
    // 5.1 Writing Requirements (3-4)
    {
      mainheading: 'Competencies (10-15 credits)',
      description: '',
      subdescription: '',
      heading: 'Writing Requirements (3-4 credits)',
      requirement: 1,
      subcourses: [
        {
          label: 'ENG-1083G: College Writing (3 credits)',
          value: 'eng1083g',
          credits: 3,
          mandatory: false
        },
        {
          label: 'ENG-1084G: College Writing with Laboratory (4 credits)',
          value: 'eng1084g',
          credits: 4,
          mandatory: false
        },
      ],
    },

    // 5.2 Communication Arts (3-4)
    {
      mainheading: '',
      description: '',
      subdescription: 'HON-1013G: Honors students only, NUR-2035G: Nursing majors only',
      heading: 'Communication Arts (3-5 credits)',
      requirement: 1,
      subcourses: [
        {
          label: 'COM-1013G: Interpersonal Communication (3 credits)',
          value: 'com1013g',
          credits: 3,
          mandatory: false
        },
        {
          label: 'COM-1023G: Public Speaking (3 credits)',
          value: 'com1023g',
          credits: 3,
          mandatory: false
        },
        {
          label: 'COM-1053G: Introduction to Communication (3 credits)',
          value: 'com1053g',
          credits: 3,
          mandatory: false
        },
        {
          label: 'COM-2003G: Small Group Communication (3 credits)',
          value: 'com2003g',
          credits: 3,
          mandatory: false
        },
        {
          label: 'COM-2053G: Media and Society (3 credits)',
          value: 'com2053g',
          credits: 3,
          mandatory: false
        },
        {
          label: 'aCOM-3043G: Persuasion (3 credits)',
          value: 'com3043g',
          credits: 3,
          mandatory: false
        },
        {
          label: 'HON-1013G: Core Conversations II (3 credits)',
          value: 'hon1013g',
          credits: 3,
          mandatory: false
        },
        {
          label: 'MLA-1019G: Modern Language Studies (1 credits)',
          value: 'mla1019g',
          credits: 1,
          mandatory: false
        },
        {
          label: 'MLA-1019G: Modern Language Studies (2 credits)',
          value: 'mla1019g',
          credits: 2,
          mandatory: false
        },
        {
          label: 'MLA-1019G: Modern Language Studies (3 credits)',
          value: 'mla1019g',
          credits: 3,
          mandatory: false
        },
        {
          label: 'MLA-1019G: Modern Language Studies (4 credits)',
          value: 'mla1019g',
          credits: 4,
          mandatory: false
        },
        {
          label: 'NUR-2035G: Fundamentals of Medical-Surgical Nursing (5 credits)',
          value: 'nur2035g',
          credits: 5,
          mandatory: false
        },
      ],
    },

    // 5.3 Quantitative Reasoning (3-4)
    {
      mainheading: '',
      description: '',
      subdescription: '',
      heading: 'Quantitative Reasoning (3-4 credits)',
      requirement: 1,
      subcourses: [
        {
          label: 'CSC-1013G: Introduction to Computing (3 credits)',
          value: 'csc1013g',
          credits: 3,
          mandatory: false
        },
        {
          label: 'FIN-2003G: Personal Finance (3 credits)',
          value: 'fin2003g',
          credits: 3,
          mandatory: false
        },
        {
          label: 'MAT-1013G: Trigonometry (3 credits)',
          value: 'mat1013g',
          credits: 3,
          mandatory: false
        },
        {
          label: 'MAT-1023G: Precalculus Mathematics (3 credits)',
          value: 'mat1023g',
          credits: 3,
          mandatory: false
        },
        {
          label: 'MAT-1033G: Introduction to Mathematical Systems (3 credits)',
          value: 'mat1033g',
          credits: 3,
          mandatory: false
        },
        {
          label: 'MAT-1034G: Calculus I (4 credits)',
          value: 'mat1034g',
          credits: 4,
          mandatory: false
        },
        {
          label: 'MAT-2063G: Introduction to Statistics (3 credits)',
          value: 'mat2063g',
          credits: 3,
          mandatory: false
        },
      ],
    },

    // 5.4 Health and Wellness (1-3)
    {
      mainheading: '',
      description: '',
      subdescription: 'The following courses are for intercollegiate team members only: PED-2011, PED-2021, PED-2031, PED-2041, PED-2051, PED-2061, PED-2081, PED-2091, PED-2101, PED-2111, PED-2121, PED-2131, PED-2141. Students who can document the completion of military basic training may contact the registrar to receive credit for this category.',
      heading: 'Health and Wellness (1-3 credits)',
      requirement: 1,
      subcourses: [
        {
          label: 'HSC-1013G: Nutrition and Wellness (3 credits)',
          value: 'hsc1013g',
          credits: 3,
          mandatory: false
        },
        {
          label: 'PED-1002G: Principles of Health & Fitness (2 credits)',
          value: 'ped1002g',
          credits: 2,
          mandatory: false
        },
        {
          label: 'PED-1071G: Basic Self-Defense (1 credit)',
          value: 'ped1071g',
          credits: 1,
          mandatory: false
        },
        {
          label: 'PED-2011G: Sports Skill: Baseball (1 credit)',
          value: 'ped2011g',
          credits: 1,
          mandatory: false
        },
        {
          label: 'PED-2021G: Sports Skill: Basketball (1 credit)',
          value: 'ped2021g',
          credits: 1,
          mandatory: false
        },
        {
          label: 'PED-2031G: Sports Skill: Cross Country (1 credit)',
          value: 'ped2031g',
          credits: 1,
          mandatory: false
        },
        {
          label: 'PED-2041G: Sports Skill: Golf (1 credit)',
          value: 'ped2041g',
          credits: 1,
          mandatory: false
        },
        {
          label: 'PED-2051G: Sports Skill: Soccer (1 credit)',
          value: 'ped2051g',
          credits: 1,
          mandatory: false
        },
        {
          label: 'PED-2061G: Sports Skill: Track and Field (1 credit)',
          value: 'ped2061g',
          credits: 1,
          mandatory: false
        },
        {
          label: 'PED-2071G: Advanced Bicycling (1 credit)',
          value: 'ped2071g',
          credits: 1,
          mandatory: false
        },
        {
          label: 'PED-2081G: Sports Skill: Volleyball (1 credit)',
          value: 'ped2081g',
          credits: 1,
          mandatory: false
        },
        {
          label: 'PED-2091G: Sports Skill: Softball (1 credit)',
          value: 'ped2091g',
          credits: 1,
          mandatory: false
        },
        {
          label: 'PED-2101G: Sports Skill: Tennis (1 credit)',
          value: 'ped2101g',
          credits: 1,
          mandatory: false
        },
        {
          label: 'PED-2111G: Sports Skill: Cheerleading (1 credit)',
          value: 'ped2111g',
          credits: 1,
          mandatory: false
        },
        {
          label: 'PED-2121G: Sports Skill: Bowling (1 credit)',
          value: 'ped2121g',
          credits: 1,
          mandatory: false
        },
        {
          label: 'PED-2131G: Sports Skill: Lacrosse (1 credit)',
          value: 'ped2131g',
          credits: 1,
          mandatory: false
        },
        {
          label: 'PED-2141G: Sports Skill: Esports (1 credit)',
          value: 'ped2141g',
          credits: 1,
          mandatory: false
        },
        {
          label: 'PED-3033G: Personal Health (3 credits)',
          value: 'ped3033g',
          credits: 3,
          mandatory: false
        },
      ],
    },

    // 6. Explorations (11-17)
    {
      mainheading: 'Explorations (11-17 credits)',
      description: 'Crossing Cultures^ (0-4 credits): Complete the requirements for one of the following avenues.',
      subdescription: 'Participation in any travel course approved to meet this requirement by the General Education Committee. Courses approved by the General Education Committee will need to provide pre-trip cross-cultural orientation, end-of-course reflection, and an implementation plan consistent with cross-cultural and cultural intelligence principles.',
      heading: 'Avenue 1 - Travel to a cross-cultural site and complete reflection: Option 1A (0-6 credits)',
      requirement: 1, 
      subcourses: [
        {
          label: 'ART-2013G: Art and Architecture in Historical Italy (3 credits)',
          value: 'art2013g',
          credits: 3,
          mandatory: false
        },
        {
          label: 'aBIB-2083G: History and Geography of Biblical Lands (3 credits)',
          value: 'bib2083g',
          credits: 3,
          mandatory: false
        },
        {
          label: 'aBIO-3094G: Tropical Ecology with Laboratory (4 credits)',
          value: 'bio3094g',
          credits: 4,
          mandatory: false
        },
        {
          label: 'CED-3062G: Developmental Missions (2 credits)',
          value: 'ced3062g',
          credits: 2,
          mandatory: false
        },
        {
          label: 'aICS-2042G: Global Diversity and Intercultural Understanding (2 credits)',
          value: 'ics2042g',
          credits: 2,
          mandatory: false
        },
        {
          label: 'ICS-4016G: Intercultural Studies Practicum (6 credits)',
          value: 'ics4016g',
          credits: 6,
          mandatory: false
        },
        {
          label: 'aPSY-3013G: Positive Psychology (3 credits)',
          value: 'psy3013g',
          credits: 3,
          mandatory: false
        },
      ],
    },

    // 6.2 Option 1B (0-1)
    {
      mainheading: '',
      description: '',
      subdescription: 'Completion of ITD-1009G Crossing Cultures Training and Experience as a corequisite with any one-to-three week spring break or summer crossing cultures trip sponsored by Mount Vernon Nazarene University.',
      heading: 'Avenue 1 - Travel to a cross-cultural site and complete reflection: Option 1B (0-1 credits)',
      requirement: 1,
      subcourses: [
        {
          label: 'ITD-1009G: Crossing Cultures Training & Experience (0 credit)',
          value: 'itd1009g',
          credits: 0,
          mandatory: false
        },
        {
          label: 'ITD-1009G: Crossing Cultures Training & Experience (0.5 credit)',
          value: 'itd1009g',
          credits: 0.5,
          mandatory: false
        },
        {
          label: 'ITD-1009G: Crossing Cultures Training & Experience (1 credit)',
          value: 'itd1009g',
          credits: 1,
          mandatory: false
        },
      ],
    },

    // 6.3 Avenue 2 - Non-Western Civilization (3)
    {
      mainheading: '',
      description: '',
      subdescription: 'EDU-3063G: Education majors only. IBS-3003G: Business majors only. SWK-2003G: Social Work majors only. ^Students meeting any of the following criteria may apply to the General Education Committee for exemption from the Crossing Cultures requirement: 1) Students who have lived for one year in a country other than their home culture after the age of seven; 2) Student who have two years of active duty military service overseas; or 3) International Students',
      heading: 'Avenue 2 - Non-Western Civilization (3 credits)',
      requirement: 1,
      subcourses: [
        {
          label: 'aCOM-3073G: Intercultural Communication (3 credits)',
          value: 'com3073g',
          credits: 3,
          mandatory: false
        },
        {
          label: 'EDU-3063G: Education & Cultural Diversity (3 credits)',
          value: 'edu3063g',
          credits: 3,
          mandatory: false
        },
        {
          label: 'EMH-3113G/ICS-3113G: International Development (3 credits)',
          value: 'emh3113g_ics3113g',
          credits: 3,
          mandatory: false
        },
        {
          label: 'ENG-3069G: Global Literature Special Topics (3 credits)',
          value: 'eng3069g',
          credits: 3,
          mandatory: false
        },
        {
          label: 'aHIS-3093G: History of the Modern Middle East (3 credits)',
          value: 'his3093g',
          credits: 3,
          mandatory: false
        },
        {
          label: 'HSC-3003G: Cultural Responsiveness in Healthcare (3 credits)',
          value: 'hsc3003g',
          credits: 3,
          mandatory: false
        },
        {
          label: 'IBS-3003G: International Business Operations (3 credits)',
          value: 'ibs3003g',
          credits: 3,
          mandatory: false
        },
        {
          label: 'aICS-2063G: Religions of the World (3 credits)',
          value: 'ics2063g',
          credits: 3,
          mandatory: false
        },
        {
          label: 'SWK-2003G: Cultural and Human Diversity (3 credits)',
          value: 'swk2003g',
          credits: 3,
          mandatory: false
        },
      ],
    },

    // 6.4 Natural Science (4)
    {
      mainheading: '',
      description: '',
      subdescription: '',
      heading: 'Natural Science (4-5 credits)',
      requirement: 1,
      subcourses: [
        {
          label: 'BIO-1014G: Principles of Biology with Laboratory (4 credits)',
          value: 'bio1014g',
          credits: 4,
          mandatory: false
        },
        {
          label: 'BIO-1054G: General Zoology with Laboratory (4 credits)',
          value: 'bio1054g',
          credits: 4,
          mandatory: false
        },
        {
          label: 'BIO-1074G: General Botany with Laboratory (4 credits)',
          value: 'bio1074g',
          credits: 4,
          mandatory: false
        },
        {
          label: 'BIO-1094G: Environmental Conservation and Sustainability (4 credits)',
          value: 'bio1094g',
          credits: 4,
          mandatory: false
        },
        {
          label: 'CHE-1034G: General Chemistry I with Laboratory (4 credits)',
          value: 'che1034g',
          credits: 4,
          mandatory: false
        },
        {
          label: 'CHE-1064G: Principles of General, Organic, and Biological Chemistry with Laboratory (4 credits)',
          value: 'che1064g',
          credits: 4,
          mandatory: false
        },
        {
          label: 'ESS-1034G: Earth Science with Laboratory (4 credits)',
          value: 'ess1034g',
          credits: 4,
          mandatory: false
        },
        {
          label: 'ESS-1044G: Astronomy with Laboratory (4 credits)',
          value: 'ess1044g',
          credits: 4,
          mandatory: false
        },
        {
          label: 'ESS-1054G: Meteorology With Laboratory (4 credits)',
          value: 'ess1054g',
          credits: 4,
          mandatory: false
        },
        {
          label: 'PHY-2014G: General Physics I with Laboratory (4 credits)',
          value: 'phy2014g',
          credits: 4,
          mandatory: false
        },
        {
          label: 'PHY-2055G: University Physics I with Laboratory (5 credits)',
          value: 'phy2055g',
          credits: 5,
          mandatory: false
        },
      ],
    },

    // 6.5 Social Science (3)
    {
      mainheading: '',
      description: '',
      subdescription: 'EDU-2023: Education majors only, MAN-3083: Business majors only',
      heading: 'Social Science (3 credits)',
      requirement: 1,
      subcourses: [
        {
          label: 'CJU-1003G: Introduction to Criminal Justice (3 credits)',
          value: 'cju1003g',
          credits: 3,
          mandatory: false
        },
        {
          label: 'ECO-1033G: Principles of Macroeconomics (3 credits)',
          value: 'eco1033g',
          credits: 3,
          mandatory: false
        },
        {
          label: 'ECO-1053G: Principles of Microeconomics (3 credits)',
          value: 'eco1053g',
          credits: 3,
          mandatory: false
        },
        {
          label: 'EDU-2023G: The Learner and the Learning Process (3 credits)',
          value: 'edu2023g',
          credits: 3,
          mandatory: false
        },
        {
          label: 'aICS-2003G: Introduction to Cultural Anthropology (3 credits)',
          value: 'ics2003g',
          credits: 3,
          mandatory: false
        },
        {
          label: 'MAN-3083G: Organizational Behavior (3 credits)',
          value: 'man3083g',
          credits: 3,
          mandatory: false
        },
        {
          label: 'POL-1003G: American Politics and Government (3 credits)',
          value: 'pol1003g',
          credits: 3,
          mandatory: false
        },
        {
          label: 'PSY-1013G: General Psychology (3 credits)',
          value: 'psy1013g',
          credits: 3,
          mandatory: false
        },
        {
          label: 'SOC-1013G: Introduction to Sociology (3 credits)',
          value: 'soc1013g',
          credits: 3,
          mandatory: false
        },
      ],
    },

    // 6.6 The Arts (1-3)
    {
      mainheading: '',
      description: '',
      subdescription: 'ART-2013: This course may be used to fulfill either the Explorations in the Arts or the Exploration in Crossing Cultures, but not both categories.',
      heading: 'The Arts (1-3 credits)',
      requirement: 1,
      subcourses: [
        {
          label: 'APM-1001G: Piano Class I (1 credit)',
          value: 'apm1001g',
          credits: 1,
          mandatory: false
        },
        {
          label: 'APM-1021G: Private Keyboard (0.5 credits)',
          value: 'apm1021g',
          credits: 0.5,
          mandatory: false
        },
        {
          label: 'APM-1021G: Private Keyboard (1 credits)',
          value: 'apm1021g',
          credits: 1,
          mandatory: false
        },
        {
          label: 'APM-1021G: Private Keyboard (1.5 credits)',
          value: 'apm1021g',
          credits: 1.5,
          mandatory: false
        },
        {
          label: 'APM-1021G: Private Keyboard (2 credits)',
          value: 'apm1021g',
          credits: 2,
          mandatory: false
        },
        {
          label: 'APM-1041G: Beginning Voice Class (1 credit)',
          value: 'apm1041g',
          credits: 1,
          mandatory: false
        },
        {
          label: 'APM-1071G: Private Instrument (0.5 credits)',
          value: 'apm1071g',
          credits: 0.5,
          mandatory: false
        },
        {
          label: 'APM-1071G: Private Instrument (1 credits)',
          value: 'apm1071g',
          credits: 1,
          mandatory: false
        },
        {
          label: 'APM-1071G: Private Instrument (1.5 credits)',
          value: 'apm1071g',
          credits: 1.5,
          mandatory: false
        },
        {
          label: 'APM-1071G: Private Instrument (2 credits)',
          value: 'apm1071g',
          credits: 2,
          mandatory: false
        },
        {
          label: 'APM-1091G: Guitar Class I (1 credit)',
          value: 'apm1091g',
          credits: 1,
          mandatory: false
        },
        {
          label: 'ART-1002G: Art in the Western World (2 credits)',
          value: 'art1002g',
          credits: 2,
          mandatory: false
        },
        {
          label: 'ART-1013G/GRD-1013G: Design Foundations (3 credits)',
          value: 'art1013g_grd1013g',
          credits: 3,
          mandatory: false
        },
        {
          label: 'ART-1053G: Drawing I (3 credits)',
          value: 'art1053g',
          credits: 3,
          mandatory: false
        },
        {
          label: 'ART-2013G: Art and Architecture in Historical Italy (3 credits)',
          value: 'art2013g_2', // Duplicate label from above (Option 1A)
          credits: 3,
          mandatory: false
        },
        {
          label: 'ART-2063G: Painting I (3 credits)',
          value: 'art2063g',
          credits: 3,
          mandatory: false
        },
        {
          label: 'ART-2083G: Ceramics I (3 credits)',
          value: 'art2083g',
          credits: 3,
          mandatory: false
        },
        {
          label: 'ART-2093G: Darkroom Photography (3 credits)',
          value: 'art2093g',
          credits: 3,
          mandatory: false
        },
        {
          label: 'aART-3003G: History of Art I (3 credits)',
          value: 'art3003g',
          credits: 3,
          mandatory: false
        },
        {
          label: 'aART-3013G: History of Art II (3 credits)',
          value: 'art3013g',
          credits: 3,
          mandatory: false
        },
        {
          label: 'CRW-2143G: Creative Writing (3 credits)',
          value: 'crw2143g',
          credits: 3,
          mandatory: false
        },
        {
          label: 'CRW-3082G: Practicum in Creative Writing: Literary Magazine (0 credits)',
          value: 'crw3082g',
          credits: 0,
          mandatory: false
        },
        {
          label: 'CRW-3082G: Practicum in Creative Writing: Literary Magazine (0.5 credits)',
          value: 'crw3082g',
          credits: 0.5,
          mandatory: false
        },
        {
          label: 'CRW-3082G: Practicum in Creative Writing: Literary Magazine (1 credits)',
          value: 'crw3082g',
          credits: 1,
          mandatory: false
        },
        {
          label: 'CRW-3082G: Practicum in Creative Writing: Literary Magazine (1.5 credits)',
          value: 'crw3082g',
          credits: 1.5,
          mandatory: false
        },
        {
          label: 'CRW-3082G: Practicum in Creative Writing: Literary Magazine (2 credits)',
          value: 'crw3082g',
          credits: 2,
          mandatory: false
        },
        {
          label: 'ENS-1001G: Music Stage Productions (0 credit)',
          value: 'ens1001g',
          credits: 0,
          mandatory: false
        },
        {
          label: 'ENS-1001G: Music Stage Productions (0.5 credit)',
          value: 'ens1001g',
          credits: 0.5,
          mandatory: false
        },
        {
          label: 'ENS-1001G: Music Stage Productions (1 credit)',
          value: 'ens1001g',
          credits: 1,
          mandatory: false
        },
        {
          label: 'ENS-1011G: Collegians Chorale (0 credit)',
          value: 'ens1011g',
          credits: 0,
          mandatory: false
        },
        {
          label: 'ENS-1011G: Collegians Chorale (0.5 credit)',
          value: 'ens1011g',
          credits: 0.5,
          mandatory: false
        },{
          label: 'ENS-1011G: Collegians Chorale (1 credit)',
          value: 'ens1011g',
          credits: 1,
          mandatory: false
        },
        {
          label: 'ENS-1020G: Goliards Chamber Ensemble (0 credit)',
          value: 'ens1020g',
          credits: 0,
          mandatory: false
        },
        {
          label: 'ENS-1020G: Goliards Chamber Ensemble (0.5 credit)',
          value: 'ens1020g',
          credits: 0.5,
          mandatory: false
        },
        {
          label: 'ENS-1020G: Goliards Chamber Ensemble (1 credit)',
          value: 'ens1020g',
          credits: 1,
          mandatory: false
        },
        {
          label: 'ENS-1021G: Treble Singers Women\'s Choir (0 credit)',
          value: 'ens1021g',
          credits: 0,
          mandatory: false
        },
        {
          label: 'ENS-1021G: Treble Singers Women\'s Choir (0.5 credit)',
          value: 'ens1021g',
          credits: 0.5,
          mandatory: false
        },
        {
          label: 'ENS-1021G: Treble Singers Women\'s Choir (1 credit)',
          value: 'ens1021g',
          credits: 1,
          mandatory: false
        },
        {
          label: 'ENS-1031G: Symphonic Wind Ensemble (0 credit)',
          value: 'ens1031g',
          credits: 0,
          mandatory: false
        },
        {
          label: 'ENS-1031G: Symphonic Wind Ensemble (0.5 credit)',
          value: 'ens1031g',
          credits: 0.5,
          mandatory: false
        },
        {
          label: 'ENS-1031G: Symphonic Wind Ensemble (1 credit)',
          value: 'ens1031g',
          credits: 1,
          mandatory: false
        },
        {
          label: 'ENS-1070G: Jazz Band (0-1 credit)',
          value: 'ens1070g',
          credits: 0,
          mandatory: false
        },
        {
          label: 'ENS-1080G: Pep Band (0 credit)',
          value: 'ens1080g',
          credits: 0,
          mandatory: false
        },
        {
          label: 'ENS-1080G: Pep Band (0.5 credit)',
          value: 'ens1080g',
          credits: 0.5,
          mandatory: false
        },
        {
          label: 'ENS-1090G: Chamber Winds Ensemble (0 credit)',
          value: 'ens1090g',
          credits: 0,
          mandatory: false
        },
        {
          label: 'ENS-1090G: Chamber Winds Ensemble (0.5 credit)',
          value: 'ens1090g',
          credits: 0.5,
          mandatory: false
        },
        {
          label: 'ENS-2010G: Flute Choir (0 credit)',
          value: 'ens2010g',
          credits: 0,
          mandatory: false
        },
        {
          label: 'ENS-2010G: Flute Choir (0.5 credit)',
          value: 'ens2010g',
          credits: 0.5,
          mandatory: false
        },
        {
          label: 'GRD-2093G: Digital Photography (3 credits)',
          value: 'grd2093g',
          credits: 3,
          mandatory: false
        },
        {
          label: 'MTH-1002G: Music in the Western World (2 credits)',
          value: 'mth1002g',
          credits: 2,
          mandatory: false
        },
        {
          label: 'MTH-1023G: Basic Structures of Music Theory I (3 credits)',
          value: 'mth1023g',
          credits: 3,
          mandatory: false
        },
      ],
    },

    // 6.7 Literature (3)
    {
      mainheading: '',
      description: '',
      subdescription: 'HON-1003: Honors Students Only',
      heading: 'Literature (3 credits)',
      requirement: 1,
      subcourses: [
        {
          label: 'ENG-1063G: Engaging Literature (3 credits)',
          value: 'eng1063g',
          credits: 3,
          mandatory: false
        },
        {
          label: 'ENG-2043G: Literary Landscapes (3 credits)',
          value: 'eng2043g',
          credits: 3,
          mandatory: false
        },
        {
          label: 'ENG-2073G: British Literature I (3 credits)',
          value: 'eng2073g',
          credits: 3,
          mandatory: false
        },
        {
          label: 'ENG-2083G: British Literature II (3 credits)',
          value: 'eng2083g',
          credits: 3,
          mandatory: false
        },
        {
          label: 'ENG-2153G: Classical Literature and Mythology (3 credits)',
          value: 'eng2153g',
          credits: 3,
          mandatory: false
        },
        {
          label: 'ENG-2163G: American Literature: Beginnings to 1945 (3 credits)',
          value: 'eng2163g',
          credits: 3,
          mandatory: false
        },
        {
          label: 'HON-1003G: Core Conversations I (3 credits)',
          value: 'hon1003g',
          credits: 3,
          mandatory: false
        },
      ],
    },
  ];

  // Stores selected subcourses per course using course index as key.
  // Each array holds the selected subcourse values.
  selectedMap: { [courseIndex: number]: string[] } = {};

  // Credit totals per course (keyed by course index)
  courseCredits: { [courseIndex: number]: number } = {};

  // Overall total credits
  overallCredits = 0;

  constructor() {
    // Initialize the selectedMap and courseCredits objects for each course.
    this.courses.forEach((course, index) => {
      this.selectedMap[index] = [];
      this.courseCredits[index] = 0;
    });
  }

  // Called when the selection for a course changes.
  onSelectionChange(courseIndex: number, selectedValues: string[]) {
    this.selectedMap[courseIndex] = selectedValues;
    // Recalculate the credits for this course.
    const course = this.courses[courseIndex];
    const total = course.subcourses
      .filter(sub => selectedValues.includes(sub.value))
      .reduce((sum, sub) => sum + sub.credits, 0);
    this.courseCredits[courseIndex] = total;
    // Update overall credits.
    this.calculateOverallCredits();
  }

  // Calculate overall credits from all courses.
  calculateOverallCredits() {
    this.overallCredits = Object.values(this.courseCredits)
      .reduce((sum, credits) => sum + credits, 0);
  }

  // Helper to check if course requirement is met.
  isRequirementMet(courseIndex: number): boolean {
    return this.selectedMap[courseIndex].length >= this.courses[courseIndex].requirement;
  }
}
