export type PerfilCV = {
    perfil: Perfil;
    descripcion: string;
    curriculum: string;
    habilidades: SectorHabil[];
    experiencia: Experiencia[];
    proyectos: Proyecto[];
  }
type Proyecto = {
  url_imagen: string;
  titulo: string;
  descripcion: string;
  url_proyecto: string;
  tags: string[];
}
type Experiencia = {
  empresa: string;
  cargo: string;
  anio: string;
  descripcion: string;
}

type SectorHabil = {
  tipo: string,
  habilidades: Habilidad[]
}

type Habilidad = {
  titulo: string;
  url_logo: string;
  tags: string[];
}
type Perfil = {
  url_imagen: string;
  nombre: string;
  apellido: string;
  rol: string;
  redes: Redes;
  telefono: string;
  localidad: string;
  web: string;
}
type Redes = {
  facebook: string;
  instagram: string;
  twitter: string;
  linkedin: string;
  github: string;
  spotify: string;
  soundcloud: string;
}