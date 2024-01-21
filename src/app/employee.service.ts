import { Injectable } from '@angular/core';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  protected employeeList: Employee[] = [
    {
      id: 0,
      name: 'Almer Kaasschieter',
      function: 'Front-end developer',
      photo: '/assets/dummy/almer.png',
      new: false,
      employee_of_the_month: false,
      hover_photo: false
    },
    {
      id: 1,
      name: 'Anouk Gündel',
      function: 'Administratief & HR',
      photo: '/assets/dummy/anouk.png',
      new: false,
      employee_of_the_month: false,
      hover_photo: false
    },
    {
      id: 2,
      name: 'Arie Joosse',
      function: 'Online marketing strateeg',
      photo: '/assets/dummy/arie.png',
      new: false,
      employee_of_the_month: false,
      hover_photo: false
    },
    {
      id: 3,
      name: 'Ariska van Leerzem',
      function: 'Online marketing strateeg',
      photo: '/assets/dummy/ariska.png',
      new: false,
      employee_of_the_month: false,
      hover_photo: false
    },
    {
      id: 4,
      name: 'Brian Dijkstra',
      function: 'Front-end developer',
      photo: '/assets/dummy/brian-small.jpg',
      new: true,
      employee_of_the_month: false,
      hover_photo: true
    },
    {
      id: 5,
      name: 'Charella Tupanwel',
      function: 'Online marketeer',
      photo: '/assets/dummy/charella.png',
      new: false,
      employee_of_the_month: false,
      hover_photo: false
    },
    {
      id: 6,
      name: 'Ellen de Jonge',
      function: 'Online marketeer',
      photo: '/assets/dummy/ellen.png',
      new: false,
      employee_of_the_month: false,
      hover_photo: false
    },
    {
      id: 7,
      name: 'Ellis Faasse',
      function: 'Interaction designer',
      photo: '/assets/dummy/ellis.png',
      new: false,
      employee_of_the_month: false,
      hover_photo: false
    },
    {
      id: 8,
      name: 'Ewout Brons',
      function: 'Strateeg',
      photo: '/assets/dummy/ewout.png',
      new: false,
      employee_of_the_month: false,
      hover_photo: false
    },
    {
      id: 9,
      name: 'Frank Dekker',
      function: 'Adviseur Online',
      photo: '/assets/dummy/frank.png',
      new: false,
      employee_of_the_month: false,
      hover_photo: false
    },
    {
      id: 10,
      name: 'Hilbert Simonse',
      function: 'Interaction designer',
      photo: '/assets/dummy/hilbert.png',
      new: false,
      employee_of_the_month: false,
      hover_photo: false
    },
    {
      id: 11,
      name: 'Ilse van der Meulen',
      function: 'Online marketeer',
      photo: '/assets/dummy/ilse.png',
      new: false,
      employee_of_the_month: false,
      hover_photo: false
    },
    {
      id: 12,
      name: 'Jaap Walhout',
      function: 'Adviseur / mede-eigenaar',
      photo: '/assets/dummy/jaap.png',
      new: false,
      employee_of_the_month: false,
      hover_photo: false
    },
    {
      id: 13,
      name: 'Jacco de Leeuw',
      function: 'Adviseur / mede-eigenaar',
      photo: '/assets/dummy/jacco.png',
      new: false,
      employee_of_the_month: true,
      hover_photo: false
    },
    {
      id: 14,
      name: 'Jachin Francke',
      function: 'Lead developer frontend',
      photo: '/assets/dummy/jachin.png',
      new: false,
      employee_of_the_month: false,
      hover_photo: false
    },
    {
      id: 15,
      name: 'James Goetheer',
      function: 'Front-end developer',
      photo: '/assets/dummy/james.png',
      new: false,
      employee_of_the_month: false,
      hover_photo: false
    },
    {
      id: 16,
      name: 'Jeroen van Sluijs',
      function: 'Analist / webdeveloper',
      photo: '/assets/dummy/jeroen.png',
      new: false,
      employee_of_the_month: false,
      hover_photo: false
    },
    {
      id: 17,
      name: 'Jordi Dekker',
      function: 'Webdeveloper',
      photo: '/assets/dummy/jordi.png',
      new: false,
      employee_of_the_month: false,
      hover_photo: false
    },
    {
      id: 18,
      name: 'Jordy Verschoor',
      function: 'Webdeveloper',
      photo: '/assets/dummy/jordy.png',
      new: false,
      employee_of_the_month: false,
      hover_photo: false
    },
    {
      id: 19,
      name: 'Joryn Kortenoeven',
      function: 'Business developer',
      photo: '/assets/dummy/joryn.png',
      new: false,
      employee_of_the_month: false,
      hover_photo: false
    },
    {
      id: 20,
      name: 'Jurgen Franse',
      function: 'Software engineer',
      photo: '/assets/dummy/jurgen.png',
      new: false,
      employee_of_the_month: false,
      hover_photo: false
    },
    {
      id: 21,
      name: 'Karen Oerlemans',
      function: 'Projectmanager',
      photo: '/assets/dummy/karen.png',
      new: false,
      employee_of_the_month: false,
      hover_photo: false
    },
    {
      id: 22,
      name: 'Laurens Kistenkas',
      function: 'Traffic medewerker',
      photo: '/assets/dummy/laurens.png',
      new: false,
      employee_of_the_month: false,
      hover_photo: false
    },
    {
      id: 23,
      name: 'Laurens Almekinders',
      function: 'Lead designer',
      photo: '/assets/dummy/laurens-2.png',
      new: false,
      employee_of_the_month: false,
      hover_photo: false
    },
    {
      id: 24,
      name: 'Leon Boot',
      function: 'Webdeveloper',
      photo: '/assets/dummy/leon.png',
      new: false,
      employee_of_the_month: false,
      hover_photo: false
    },
    {
      id: 25,
      name: 'Lianne Zwijnenberg',
      function: 'Communicatieadviseur Online',
      photo: '/assets/dummy/lianne.png',
      new: false,
      employee_of_the_month: false,
      hover_photo: false
    },
    {
      id: 26,
      name: 'Liza Martens',
      function: 'Traffic medewerker',
      photo: '/assets/dummy/liza.png',
      new: false,
      employee_of_the_month: false,
      hover_photo: false
    },
    {
      id: 250,
      name: 'Lionel Lord',
      function: 'Front-end developer',
      photo: '/assets/dummy/lionel.png',
      new: false,
      employee_of_the_month: false,
      hover_photo: false
    },
    {
      id: 27,
      name: 'Louij Ghossein',
      function: 'Projectmanager',
      photo: '/assets/dummy/louij.png',
      new: false,
      employee_of_the_month: false,
      hover_photo: false
    },
    {
      id: 28,
      name: 'Luuk Rozemeijer',
      function: 'Projectmanager',
      photo: '/assets/dummy/luuk.png',
      new: false,
      employee_of_the_month: false,
      hover_photo: false
    },
    {
      id: 29,
      name: 'Marcel Raaijmakers',
      function: 'Lead developer',
      photo: '/assets/dummy/marcel.png',
      new: false,
      employee_of_the_month: true,
      hover_photo: false
    },
    {
      id: 30,
      name: 'Marloes van Veelen',
      function: 'Traffic manager',
      photo: '/assets/dummy/marloes.png',
      new: false,
      employee_of_the_month: false,
      hover_photo: false
    },
    {
      id: 31,
      name: 'Merijn Fonteine',
      function: 'Hostingspecialist',
      photo: '/assets/dummy/merijn.png',
      new: false,
      employee_of_the_month: false,
      hover_photo: false
    },
    {
      id: 32,
      name: 'Micha de Boks',
      function: 'Webdeveloper',
      photo: '/assets/dummy/micha.png',
      new: false,
      employee_of_the_month: false,
      hover_photo: false
    },
    {
      id: 33,
      name: 'Milan Vos',
      function: 'Content marketeer',
      photo: '/assets/dummy/milan.png',
      new: false,
      employee_of_the_month: false,
      hover_photo: false
    },
    {
      id: 34,
      name: 'Myrthe Roozen',
      function: 'UX designer',
      photo: '/assets/dummy/myrthe.png',
      new: false,
      employee_of_the_month: false,
      hover_photo: false
    },
    {
      id: 35,
      name: 'Naomi Moerland',
      function: 'Business developer',
      photo: '/assets/dummy/naomi.png',
      new: false,
      employee_of_the_month: false,
      hover_photo: false
    },
    {
      id: 36,
      name: 'Nicolette Wouters',
      function: 'Traffic medewerker',
      photo: '/assets/dummy/nicolette.png',
      new: false,
      employee_of_the_month: false,
      hover_photo: false
    },
    {
      id: 37,
      name: 'Paulien Geelen',
      function: 'HR-adviseur',
      photo: '/assets/dummy/paulien.png',
      new: false,
      employee_of_the_month: true,
      hover_photo: false
    },
    {
      id: 38,
      name: 'Rens Maljers',
      function: 'Traffic medewerker',
      photo: '/assets/dummy/rens.png',
      new: false,
      employee_of_the_month: false,
      hover_photo: false
    },
    {
      id: 39,
      name: 'Rick Lifino',
      function: 'Webdeveloper',
      photo: '/assets/dummy/rick.png',
      new: false,
      employee_of_the_month: false,
      hover_photo: false
    },
    {
      id: 40,
      name: 'Rick van Drongelen',
      function: 'Online marketing strateeg',
      photo: '/assets/dummy/rick-2.png',
      new: false,
      employee_of_the_month: false,
      hover_photo: false
    },
    {
      id: 41,
      name: 'Rick Droger',
      function: 'Online marketeer',
      photo: '/assets/dummy/rick-3.png',
      new: false,
      employee_of_the_month: false,
      hover_photo: false
    },
    {
      id: 42,
      name: 'Rolf Dijkstra',
      function: 'Business developer',
      photo: '/assets/dummy/rolf.png',
      new: false,
      employee_of_the_month: false,
      hover_photo: false
    },
    {
      id: 43,
      name: 'Ruben Prinsen',
      function: 'Front-end developer',
      photo: '/assets/dummy/ruben.png',
      new: false,
      employee_of_the_month: false,
      hover_photo: false
    },
    {
      id: 44,
      name: 'Vera Geschiere',
      function: 'Projectmanager',
      photo: '/assets/dummy/vera.png',
      new: false,
      employee_of_the_month: false,
      hover_photo: false
    },
    {
      id: 44,
      name: 'Yasmin Matthijsse',
      function: 'Financieel- administratief medewerker',
      photo: '/assets/dummy/yasmin.png',
      new: false,
      employee_of_the_month: false,
      hover_photo: false
    }
  ];

  getAllEmployees(): Employee[] {
    return this.employeeList;
  }

  getEmployeeById(id: number): Employee | undefined {
    return this.employeeList.find(employee => employee.id === id);
  }
}
