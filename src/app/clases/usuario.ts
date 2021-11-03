export class Usuario {

    public username: string;
    public password: string;
    public perfil: string;
    public sexo: string;
    public estado:string;
    public avatar:string;
  

  constructor(usuario:string, clave:string, perfil:string, sexo:string, avatar:string) {
    this.username = usuario;
    this.password = clave;
    this.perfil = perfil;
    this.sexo = sexo;
    this.avatar = avatar;
    this.estado = "activo";
  }
}
