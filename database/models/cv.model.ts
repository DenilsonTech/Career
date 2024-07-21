import { Schema, model, models } from "mongoose";

interface Emprego {
    funcao?: string;
    entidateempregadora?: string;
    datadeinicio?: Date;
    datadefim?: Date;
    cidade?: string;
    descriao?: string;
  }
  
  interface Educacao {
    nomedaescola?: string;
    grauacademico?: string;
    datadeinicio?: Date;
    datadefim?: Date;
    cidade?: string;
    descriao?: string;
  }
  
  interface Website {
    rotulo?: string;
    link?: string;
  }
  
  interface Competencia {
    titulo?: string;
    nivel?: string;
  }
  
  interface Curso {
    titulo?: string;
    instituicao?: string;
    datadeinicio?: Date;
    datadefim?: Date;
  }
  
  interface ActividadesExtracurriculares {
    funcao?: string;
    entidateempregadora?: string;
    datadeinicio?: Date;
    datadefim?: Date;
    cidade?: string;
    descriao?: string;
  }
  
  interface Estagios {
    funcao?: string;
    entidateempregadora?: string;
    datadeinicio?: Date;
    datadefim?: Date;
    cidade?: string;
    descriao?: string;
  }
  
  interface Idioma {
    titulo?: string;
    nivel?: string;
  }
  
  interface Referencia {
    nome?: string;
    empresa?: string;
    telefone?: string;
    email?: string;
  }
  
  export interface ICV extends Document {
    _id: string;
    jobtitle?: string;
    firstname: string;
    lastname: string;
    photo?: string;
    email: string;
    telephone?: string;
    country?: string;
    city?: string;
    address?: string;
    postalcode?: string;
    documentid?: string;
    nationality?: string;
    bornplace?: string;
    birthdate?: Date;
  
    perfil?: string;
  
    emprego?: Emprego[];
  
    educacao?: Educacao[];
  
    website?: Website[];
  
    competencia?: Competencia[];
  
    curso?: Curso[];
  
    actividadesextracurriculares?: ActividadesExtracurriculares[];
  
    estagios?: Estagios[];
  
    idioma?: Idioma[];
  
    referencia?: Referencia[];
  
    owner: {_id: string, firstName: string, lastName: string, email: string };
  }

const CVSchema = new Schema({
    jobtitle: { type: String },
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    photo: { type: String },
    email: { type: String, required: true },
    telephone: { type: String },
    country: { type: String },
    city: { type: String },
    address: { type: String },
    postalcode: { type: String },
    documentid: { type: String },
    nationality: { type: String },
    bornplace: { type: String },
    birthdate: { type: Date, default: Date.now},

    perfil: { type: String },
    
    emprego: [{
        funcao: { type: String },
        entidateempregadora: { type: String },
        datadeinicio: { type: Date, default: Date.now },
        datadefim: { type: Date, default: Date.now },
        cidade: { type: String },
        descriao: { type: String }
    }],
    
    educacao: [{
        nomedaescola: { type: String },
        grauacademico: { type: String },
        datadeinicio: { type: Date, default: Date.now },
        datadefim: { type: Date, default: Date.now },
        cidade: { type: String },
        descriao: { type: String }
    }],

    website: [{
        rotulo: { type: String },
        link: { type: String }
    }],

    competencia: [{
        titulo: { type: String },
        nivel: { type: String }
    }],

    curso: [{
        titulo: { type: String },
        instituicao: { type: String },
        datadeinicio: { type: Date, default: Date.now },
        datadefim: { type: Date, default: Date.now }
    }],

    actividadesextracurriculares: [{
        funcao: { type: String },
        entidateempregadora: { type: String },
        datadeinicio: { type: Date, default: Date.now },
        datadefim: { type: Date, default: Date.now },
        cidade: { type: String },
        descriao: { type: String }
    }],
    
    estagios: [{
        funcao: { type: String },
        entidateempregadora: { type: String },
        datadeinicio: { type: Date, default: Date.now },
        datadefim: { type: Date, default: Date.now },
        cidade: { type: String },
        descriao: { type: String }
    }],

    idioma: [{
        titulo: { type: String },
        nivel: { type: String }
    }],

    referencia: [{
        nome: { type: String },
        empresa: { type: String },
        telefone: { type: String },
        email: { type: String }
    }],
    
    owner: { type: Schema.Types.ObjectId, ref: 'User'}
});

const CV = models.CV || model('CV', CVSchema);

export default CV;
