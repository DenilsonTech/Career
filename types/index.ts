// ====== USER PARAMS
export type CreateUserParams = {
    clerkId: string
    firstName: string
    lastName: string
    username: string
    email: string
    photo: string
  }
  
  export type UpdateUserParams = {
    firstName: string
    lastName: string
    username: string
    photo: string
  }

  export type CreateCVParams = {
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
  
    emprego?: {
      funcao?: string;
      entidateempregadora?: string;
      datadeinicio?: Date;
      datadefim?: Date;
      cidade?: string;
      descriao?: string;
    }[];
  
    educacao?: {
      nomedaescola?: string;
      grauacademico?: string;
      datadeinicio?: Date;
      datadefim?: Date;
      cidade?: string;
      descriao?: string;
    }[];
  
    website?: {
      rotulo?: string;
      link?: string;
    }[];
  
    competencia?: {
      titulo?: string;
      nivel?: string;
    }[];
  
    curso?: {
      titulo?: string;
      instituicao?: string;
      datadeinicio?: Date;
      datadefim?: Date;
    }[];
  
    actividadesextracurriculares?: {
      funcao?: string;
      entidateempregadora?: string;
      datadeinicio?: Date;
      datadefim?: Date;
      cidade?: string;
      descriao?: string;
    }[];
  
    estagios?: {
      funcao?: string;
      entidateempregadora?: string;
      datadeinicio?: Date;
      datadefim?: Date;
      cidade?: string;
      descriao?: string;
    }[];
  
    idioma?: {
      titulo?: string;
      nivel?: string;
    }[];
  
    referencia?: {
      nome?: string;
      empresa?: string;
      telefone?: string;
      email?: string;
    }[];
  
    owner: string;
  };

  export type UpdateCVParams = {
    jobtitle?: string;
    firstname?: string;
    lastname?: string;
    photo?: string;
    email?: string;
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
  
    emprego?: {
      funcao?: string;
      entidateempregadora?: string;
      datadeinicio?: Date;
      datadefim?: Date;
      cidade?: string;
      descriao?: string;
    }[];
  
    educacao?: {
      nomedaescola?: string;
      grauacademico?: string;
      datadeinicio?: Date;
      datadefim?: Date;
      cidade?: string;
      descriao?: string;
    }[];
  
    website?: {
      rotulo?: string;
      link?: string;
    }[];
  
    competencia?: {
      titulo?: string;
      nivel?: string;
    }[];
  
    curso?: {
      titulo?: string;
      instituicao?: string;
      datadeinicio?: Date;
      datadefim?: Date;
    }[];
  
    actividadesextracurriculares?: {
      funcao?: string;
      entidateempregadora?: string;
      datadeinicio?: Date;
      datadefim?: Date;
      cidade?: string;
      descriao?: string;
    }[];
  
    estagios?: {
      funcao?: string;
      entidateempregadora?: string;
      datadeinicio?: Date;
      datadefim?: Date;
      cidade?: string;
      descriao?: string;
    }[];
  
    idioma?: {
      titulo?: string;
      nivel?: string;
    }[];
  
    referencia?: {
      nome?: string;
      empresa?: string;
      telefone?: string;
      email?: string;
    }[];
  
    owner?: string;
  };

  export type DeleteCVParams = {
    cvId: string;
    ownerId: string;
  };

  export type GetAllCVParams = {
    query?: string;
    limit: number;
    page: number;
  };

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
  
  export type CV = {
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

  export type RemoveUrlQueryParams = {
    params: string
    keysToRemove: string[]
  }

  export type UrlQueryParams = {
    params: string
    key: string
    value: string | null
  }
  