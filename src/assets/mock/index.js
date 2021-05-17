import * as icons from "../icons";
import fotoRenata from "../images/renata_perfil.jpg";
import fotoCarlos from "../images/carlos_perfil.jpg";
import fotoSuelton from "../images/suelton_perfil.jpg";
import fotoLeandro from "../images/leandro_perfil.jpg";
import fotoKuromi from "../images/kuromi_perfil.jpg";

export const generalInfoMock = [
  {
    icon: icons.blueUserIcon,
    number: 26,
    description: "Pacientes ativos",
    percentage: 30,
    hiddenBoxDescription: "Pacientes totais",
    hiddenBoxValue: 268,
  },
  {
    icon: icons.blueTubeIcon,
    number: 306,
    description: "Testes realizados",
    percentage: -10,
    hiddenBoxDescription: "Testes totais",
    hiddenBoxValue: 1265,
  },
  {
    icon: icons.greenCheckTubeIcon,
    number: 139,
    description: "Testes concluídos",
    percentage: 30,
    hiddenBoxDescription: "Testes totais concluídos",
    hiddenBoxValue: 10550.0,
  },
  {
    icon: icons.redCrossTubeIcon,
    number: 11,
    description: "Testes cancelados",
    percentage: -3,
    hiddenBoxDescription: "Testes totais cancelados",
    hiddenBoxValue: 618,
  },
];

export const attandanceHistoryMock = [
  {
    icon: icons.blueBrainIcon,
    name: "Renata Augusto Ferreira",
    tests: "TDAH CAB ADHD",
    date: "20/10/2023",
  },
  {
    icon: icons.pinkHexagonIcon,
    name: "Renata Augusto Ferreira",
    tests: "Autismo",
    date: "20/09/2023",
  },
  {
    icon: icons.blueBrainIcon,
    name: "Renata Augusto Ferreira",
    tests: "TDAH CAB ADHD",
    date: "20/10/2023",
  },
  {
    icon: icons.pinkHexagonIcon,
    name: "Renata Augusto Ferreira",
    tests: "Autismo",
    date: "20/09/2023",
  },
];

export const importantUptatesMock = [
  {
    profileImage: fotoRenata,
    name: "Renata Augusto Ferreira",
    test: "TDAH CAB ADHD",
    isCompleted: true,
  },
  {
    profileImage: fotoCarlos,
    name: "Carlos Nobrega Baccio",
    test: "TDAH CAB ADHD",
    isCompleted: false,
  },
  {
    profileImage: fotoSuelton,
    name: "Suelton A. Mellis ",
    test: "TDAH CAB ADHD",
    isCompleted: false,
  },
];

export const patientsUpdatesMock = [
  {
    icon: icons.blueBrainIcon,
    name: "Renata Augusto Ferreira",
    tests: "TDAH CAB ADHD",
    date: "20/10/2023",
  },
  {
    icon: icons.pinkHexagonIcon,
    name: "Renata Augusto Ferreira",
    tests: "Autismo",
    date: "20/09/2023",
  },
  {
    icon: icons.blueBrainIcon,
    name: "Renata Augusto Ferreira",
    tests: "TDAH CAB ADHD",
    date: "20/10/2023",
  },
  {
    icon: icons.pinkHexagonIcon,
    name: "Renata Augusto Ferreira",
    tests: "Autismo",
    date: "20/09/2023",
  },
  {
    icon: icons.pinkHexagonIcon,
    name: "Renata Augusto Ferreira",
    tests: "Autismo",
    date: "20/09/2023",
  },
  {
    icon: icons.pinkHexagonIcon,
    name: "Renata Augusto Ferreira",
    tests: "Autismo",
    date: "20/09/2023",
  },
];

export const allPatientsMock = [
  {
    profileImage: fotoRenata,
    name: "Renata Augusto Ferreira",
    tests: "TDAH CAB ADHD, Autismo",
    realizedTestsQtd: "3",
    canceledTestsQtd: "1",
    pendingTestQtd: "1",
  },
  {
    profileImage: fotoLeandro,
    name: "Leandro Motta Braga",
    tests: "TDAH CAB ADHD, Autismo",
    realizedTestsQtd: "6",
    canceledTestsQtd: "0",
    pendingTestQtd: "5",
  },
  {
    profileImage: fotoKuromi,
    name: "Kuromi Naori Kagasawa",
    tests: "TDAH CAB ADHD, Autismo",
    realizedTestsQtd: "22",
    canceledTestsQtd: "0",
    pendingTestQtd: "2",
  },
];
