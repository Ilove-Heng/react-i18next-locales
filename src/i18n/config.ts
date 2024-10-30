import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      home: {
        title: "Welcome",
        description: "This is the home page",
      },
      project: {
        title: 'Project',
        description: "happy to learn new things",
      },
      about: {
        title: "About Us",
        description: "Learn more about our company",
      },
      navigation: {
        home: "Home",
        project: "Project",
        about: "About",
        contact: "Contact",
      },
    },
  },
  it: {
    translation: {
      home: {
        title: "Benvenuto",
        description: "Questa è la home page",
      },
      project: {
        title: 'Progetto',
        description: "felice di imparare cose nuove",
      },
      about: {
        title: "Chi Siamo",
        description: "Scopri di più sulla nostra azienda",
      },
      navigation: {
        home: "Casa",
        project: "Progetto",
        about: "Chi Siamo",
        contact: "Contatti",
      },
    },
  },
  km: {
    translation: {
      home: {
        title: "សូមស្វាគមន៍",
        description: "នេះជាទំព័រដើម",
      },
      project: {
        title: 'គម្រោង',
        description: "រីករាយក្នុងការរៀនអ្វីថ្មី។",
      },
      about: {
        title: "អំពីយើង",
        description: "ស្វែងយល់បន្ថែមអំពីក្រុមហ៊ុនរបស់យើង។",
      },
      navigation: {
        home: "ផ្ទះ",
        project: "គម្រោង",
        about: "អំពី",
        contact: "ទំនាក់ទំនង",
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
