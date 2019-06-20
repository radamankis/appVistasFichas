import React,{Component} from 'react';

export default class Empleado extends Component {

    state={
        sexo:''
    }

    render() {
        return (
         <div className="form-group card border-dark  ">
   
            <div className="card mt-3  ">
            <div className="card-body ">
                <h2 className="card-title text-center mb-5">Ingrese los datos del nuevo Empleado
                </h2>
                
                <form>
                
            <fieldset>
            <legend 
            
            className="text-center">Datos Personales del Empleado
            </legend>
            <div className="card mt-3 py-2 card border-dark mb-3">
            <div className="card-body">
                <div className="form-group row">

                <div className="form-group col-4">
                <label className="Nombre">Nombre
                </label>
                <input type="text"
                className="form-control "
                    id="nombreEmpleado" 
                    aria-describedby="nombreHelp" 
                    placeholder="Ingrese Nombre "/>
                
                </div>

                <div className="form-group col-4 ">
                <label className="Apellido">Apellido
                </label>
                
                <input type="text"
                className="form-control"
                    id="apellido" 
                    aria-describedby="apellidoHelp" 
                    placeholder="Ingrese Apellido "/>
                
                </div>
                
                
                
                </div>
                <div className="form-group row ">
                <div className="form-group col-3 mr-5 ">
                <label className="Cedula">Cedula
                </label>
                <input type="text"
                className="form-control "
                    id="cedula" 
                    aria-describedby="cedulaHelp" 
                    placeholder="Ingrese Cedula "/>
                
                </div>

                
                
                <div className="form-group col-3 ml-5">
                <label className="Email">Email</label>
                <input type="email" 
                className="form-control "
                id="emailEmpleado" 
                aria-describedby="emailHelp"
                    placeholder="Ingrese email"/>
                <small id="emailHelp" 
                className="form-text text-muted">ejemplo: ejemplo@gmail.com.
                </small>
                </div>

                <div className="form-group col-3 ml-5">
                <label className="password">Password</label>
                <input type="password" 
                className="form-control "
                id="passwordEmpleado" 
                aria-describedby="passwordHelp"
                    placeholder="Ingrese password"/>
                
                </div>
                </div>

                
                
                
                
                <div className="form-group row ">
                <div className="form-group col-3 ">
                
                
                <label className="fechaVigencia">Fecha Vigencia</label>
                <input type="date" 
                className="form-control " 
                name="fechaVigencia" 
                />       
                </div>
                <div className="form-group col-3">
                <label className="fechaIngreso">Fecha Ingreso</label>
                <input type="date" 
                className="form-control " 
                name="fechaIngreso" 
                />
                </div>

                <div className="form-group col-3">
                <label className="fechaDeNacimiento">Fecha De Nacimiento</label>
                <input type="date" 
                className="form-control " 
                name="fechaIngreso" 
                />
                </div>

                <div className="form-group col-3">
                <label className="fechaIngreso">FechaIngreso</label>
                <input type="date" 
                className="form-control " 
                name="fechaIngreso" 
                />
                </div>
                </div>
                </div>
                </div>
                
                
                <div className="card mt-3 py-2 card border-dark mb-3">
                <div className="card-body">
                <div className="form-group row ">
                

                <div className="form-group col-4">
                <div className="form-group ">
                <label htmlFor="sexo">Sexo</label>
                <div className="form-group ">
                <input type='radio' value='masculino'
                
                checked={this.state.sexo ==='masculino'}/> Masculino
                    <input type='radio' value='femenino'
                    checked={this.state.sexo === 'femenino'}/> Femenino
                </div>
                </div>  
                    
                    
                
                </div>

                <div className="form-group col-3">
                <label className="Nacionalidad">Nacionalidad
                </label>
                <input type="text"
                className="form-control "
                    id="nacionalidad" 
                    aria-describedby="nacionalidadHelp" 
                    placeholder="Ingrese Nacionalidad "/>
                
                </div>

                <div className="form-group col-3">
                <label className="EstadoCivil">Estado Civil</label>
                <select className="form-control  "
                id="estadoCivil">
                    <option>Soltero</option>
                    <option>Casado</option>
                    <option>Viudo</option>
                    <option>Divorciado</option>
                    
                </select>
                </div>

                <div className="form-group col-3">
                <label className="nHijos">Numero de Hijos
                </label>
                <input type="int"
                className="form-control "
                id="nHijos" 
                aria-describedby="nacionalidadHelp" 
                placeholder="ingreso un numero ejem: 3 "/>
                </div>
                </div>
                </div>
                </div>
                
                
                </fieldset>

                <fieldset>
            <legend 
            className="text-center">Formación Academica
            </legend>
            <div className="card mt-3 py-2 card border-dark mb-3">
            <div className="card-body">
                <div className="form-group row">

                <div className="form-group col-3">
                <label className="GradoInstitucion">Grado de Institución</label>
                <select className="form-control  "
                id="gradoInstitucion">
                    <option>Seleccione Grado</option>
                    <option>Media</option>
                    <option>T.S.U</option>
                    <option>Pregrado</option>
                    <option>Post-Grado</option>
                    
                </select>
                </div>

                <div className="form-group col-5">
                <label className="TituloPreGrado-TSU">Titulo de PreGrado-TSU</label>
                <input type="text"
                className="form-control "
                    id="tituloPregrado-TUS"                     
                    placeholder="Ingrese un Titulo de pregrado-TSU "/>
                
                </div>
                
                
                
                </div>
                <div className="form-group row ">
                <div className="form-group col-5">
                <label className="UniversidadPreGrado-TSU">Nombre de la Universidad-TSU</label>
                <input type="text"
                className="form-control "
                    id="UniversidadPreGrado-TUS"                     
                    placeholder="Ingrese Nombre de la Universidad-TSU "/>
                
                </div>

                
                
                <div className="form-group col-5">
                <label className="TituloPostGrado">Titulo de PostGrado</label>
                <input type="text"
                className="form-control "
                    id="tituloPostGrado"                     
                    placeholder="Ingrese un Titulo de Post-Grado "/>
                
                
                </div>
                </div>
                
                
                <div className="form-group row ">
                
                <div className="form-group col-5">
                <label className="UniversidadPost-Grado">Nombre de la Universidad-Post-Grado</label>
                <input type="text"
                className="form-control "
                    id="UniversidadPost-Grado"                     
                    placeholder="Ingrese Nombre de la Universidad-Post-Grado "/>
                
                </div>
                
                </div>
                </div>
                </div>
                
                
               
                
                
                </fieldset>

                <fieldset>
            <legend 
            className="text-center">Datos del Cargo
            </legend>
            <div className="card mt-3 py-2 card border-dark ">
            <div className="card-body">
                <div className="form-group row">

                <div className="form-group col-3">
                <label className="Nucleo">Nucleo</label>
                <select className="form-control  "
                id="nucleo">
                    <option>Seleccione Núcleo</option>
                    <option>Anzoategui</option>
                    <option>Cumaná</option>
                    <option>Monágas</option>
                    <option>Bolívar</option>
                    <option>Nueva Esparta</option>
                    
                </select>
                </div>

                <div className="form-group col-3">
                <label className="CodigoNucleo">Codigo del Núcleo</label>
                <input type="int"
                className="form-control "
                    id="codigoNucleo"                     
                    placeholder="Ingrese el codigo del Núcleo"/>
                
                </div>
                
                <div className="form-group col-4">
                <label className="Nucleo">Localización</label>
                <div><input type="radio" name="localizacion" value="Nucleo"/>Núcleo</div>
                <div><input type="radio" name="localizacion" value="Extencion"/>Extención</div>
                
                <input type="radio" name="localizacion" value="Otro"/>Otro
                </div>
                
                </div>
                <div className="form-group row ">
                <div className="form-group col-5">
                <label className="Dependencia">Dependencia de Adscripción</label>
                <input type="text"
                className="form-control "
                    id="dependencia"                     
                    placeholder="Escuela-Dirección- Departamento-Sección o Area "/>
                
                </div>

                
                
                <div className="form-group col-5">
                <label className="DenominacionCargo">Denominacion del Cargo</label>
                <input type="text"
                className="form-control "
                    id="denominacionCargo"                     
                    placeholder="Ingrese un Denominacion del cargo "/>
                
                
                </div>
                </div>
                
                
                <div className="form-group row ">
                
                <div className="form-group col-5">
                <label className="CargoActual">Cargo Actual</label>
                <input type="text"
                className="form-control "
                    id="cargoActual"                     
                    placeholder="Ingrese Cargo Actual "/>
                
                </div>
                <div className="form-group col-5">
                <label className="NombreOtraInstitucion">Nombre de otra Institución</label>
                <input type="text"
                className="form-control "
                    id="nombreOtraInstitucion"                     
                    placeholder="Ingrese el nombre donde presto servicio "/>
                
                </div>
                
                
                </div>
                <div className="form-group row ">
                <div className="form-group col-3">
                <label className="fechaIngresoDesde">Desde</label>
                <input type="date" 
                className="form-control " 
                name="fechaIngresoDesde" 
                />
                </div>
                <div className="form-group col-3">
                <label className="fechaIngresoHasta">Hasta</label>
                <input type="date" 
                className="form-control " 
                name="fechaIngresoHasta" 
                />
                </div>
                </div>
                </div>
                
                </div>
                
                
               
                
                
                </fieldset>

                <fieldset>
            <legend 
            className="text-center">Tipo de Cargo
            </legend>
            <div className="card mt-3 py-2 card border-dark ">
            <div className="card-body">
                <div className="form-group row">

                <div className="form-group col-3">
                <label className="TipoGenerico">Tipo de Generico</label>
                <select className="form-control  "
                id="tipoGenerico">
                    <option>Seleccione tipo</option>
                    <option>Docente</option>
                    <option>Administrativo</option>
                    <option>Obrero</option>
                    
                    
                </select>
                </div>

                <div className="form-group col-3">
                <label className="TipoEspecifico">Tipo de Especifico</label>
                <select className="form-control  "
                id="tipoEspecifico">
                    <option>Seleccione tipo</option>
                    <option>Sin Especifico</option>
                    <option>Apoyo</option>
                    <option>T.S.U</option>
                    <option>Aux.Docente</option>
                    <option>Profesional</option>
                    
                    
                </select>
                </div>
                
                <div className="form-group col-3">
                <label className="TipoDedicacion">Dedicaicon Laboral</label>
                <select className="form-control  "
                id="dedicacionLaboral">
                    <option>Seleccione tipo</option>
                    <option>T.Exclusivo</option>
                    <option>T.Completo</option>
                    <option>Medio Tiempo</option>
                    <option>T.Parcial</option>
                    
                    
                    
                </select>
                </div>
                
                </div>
                <div className="form-group row ">
                <div className="form-group col-3">
                <label className="ActividadLaboral">Actividad Laboral</label>
                <select className="form-control  "
                id="actividadLaboral">
                    <option>Seleccione tipo</option>
                    <option>Docente-Instructor</option>
                    <option>Docente-Asistente</option>
                    <option>Docente-Agregado</option>
                    <option>Docente-Asociado</option>
                    <option>Docente-Titular</option>
                    <option>Administrativo-Nivel-1</option>
                    <option>Administrativo-Nivel-2</option>
                    <option>Administrativo-Nivel-3</option>
                    <option>Administrativo-Nivel-4</option>
                    <option>Administrativo-Nivel-5</option>
                    <option>Administrativo-Nivel-6</option>
                    <option>Administrativo-Nivel-7</option>
                    <option>Administrativo-Nivel-8</option>
                    <option>Administrativo-Nivel-9</option>
                    <option>Administrativo-Nivel-10</option>
                    <option>Administrativo-Nivel-11</option>
                    <option>Administrativo-Nivel-12</option>
                    <option>Administrativo-Nivel-13</option>
                    <option>Administrativo-Nivel-14</option>
                    <option>Administrativo-Nivel-15</option>
                    <option>Obrero-Nivel-1</option>
                    <option>Obrero-Nivel-2</option>
                    <option>Obrero-Nivel-3</option>
                    <option>Obrero-Nivel-4</option>
                    <option>Obrero-Nivel-5</option>
                    <option>Obrero-Nivel-6</option>
                    <option>Obrero-Nivel-7</option>


                    
                    
                    
                    
                </select>
                </div>
                
                </div>
                
                
                <div className="form-group row card border-dark ">
                
                <div className="form-group row p-3 ">
                    <div className="form-group col-3">
                <label className="CondicionLaboral">Condicion Laboral</label>
                <select className="form-control  "
                id="condicionLaboral">
                    <option>Seleccione tipo</option>
                    <option>Ordinario o Fijo</option>
                    <option>Contratado</option>
                    <option>Jubilado</option>
                    <option>Pensionado por Incapacidad</option>
                    <option>Pensionado por Sobreviviente</option>
                    <option>Becario</option>
                    <option>Sabático</option>
                    <option>Contratado Sin Código de Cargo</option>
                    <option>Comision de Servicio</option>
                    <option>Permiso no Rem</option>
                      
                </select>
                
                </div>
                <div className="form-group col-3">
                <label className="fechaIngresoDesde">Desde</label>
                <input type="date" 
                className="form-control " 
                name="fechaIngresoDesde" 
                />
                </div>
                <div className="form-group col-3">
                <label className="fechaIngresoHasta">Hasta</label>
                <input type="date" 
                className="form-control " 
                name="fechaIngresoHasta" 
                />
                </div>
                </div>
                
                
                
                </div>

                <div className="form-group row ">
                
                <div className="form-group col-5">
                <label className="CodigoCargo">CodigoCargo</label>
                <input type="text"
                className="form-control "
                    id="codigoCargo"                     
                    placeholder="Ingrese codigo del cargo UDO "/>
                
                </div>

                <div className="form-group col-5">
                <label className="Nucleo2">Nucleo</label>
                <input type="text"
                className="form-control "
                    id="nucleo2"                     
                    placeholder="Ingrese Nucleo "/>
                
                </div>

                <div className="form-group col-5">
                <label className="Prog">Prog</label>
                <input type="text"
                className="form-control "
                    id="prog"                     
                    placeholder="Ingrese Prog UDO "/>
                
                </div>

                <div className="form-group col-5">
                <label className="ACC">ACC</label>
                <input type="text"
                className="form-control "
                    id="acc"                     
                    placeholder="Ingrese ACC UDO "/>
                
                </div>

                <div className="form-group col-5">
                <label className="SubACC">Sub-ACC</label>
                <input type="text"
                className="form-control "
                    id="subacc"                     
                    placeholder="Ingrese Sub-ACC UDO "/>
                
                </div>
                
                <div className="form-group col-5">
                <label className="Tarea">Tarea</label>
                <input type="text"
                className="form-control "
                    id="tarea"                     
                    placeholder="Ingrese Tarea "/>
                
                </div>

                
                </div>
                <div className="form-group">
                    <label htmlFor="Detalle">Detalle</label>
                    <textarea className="form-control" id="detalle" rows="3"></textarea>
                    </div>
                </div>
                </div>
                
                
               
                
                
                </fieldset>

                <fieldset>
            <legend 
            className="text-center">Remuneraciones
            </legend>
            <div className="card mt-3 py-2 card border-dark ">
            <div className="card-body">
                <div className="form-group row">
            <div className="form-group col-3">
                <label className="SueldoTabla">SueldoTabla
                </label>
                <input type="double"
                className="form-control "
                id="sueldoTabla" 
                placeholder="ejem: 256.23 "/>
                </div>

                <div className="form-group col-3">
                <label className="BonoJefatura ">Bono de Jefatura</label>
                <input type="double"
                className="form-control "
                    id="bonoJefatura"                     
                    placeholder="ejemplo 450.5"/>
                
                </div>

                <div className="form-group col-3">
                <label className="PrimaFamiliar">Prima Familiar</label>
                <input type="double"
                className="form-control "
                    id="primaFamiliar"                     
                    placeholder="ejemplo 450.5"/>
                
                </div>

                <div className="form-group col-3">
                <label className="BonoLacteo ">Bono Lácteo</label>
                <input type="double"
                className="form-control "
                    id="bonoLacteo"                     
                    placeholder="ejemplo 450.5"/>
                
                </div>

                <div className="form-group col-4">
                <label className="PrimaGradoAcDocente ">Prima Grado Academico Docente</label>
                <input type="double"
                className="form-control "
                    id="primaGradoAcDocente"                     
                    placeholder="ejemplo 450.5"/>
                
                </div>

                <div className="form-group col-3">
                <label className="PrimaPofecionalizacion ">Prima Profecionalizacion</label>
                <input type="double"
                className="form-control "
                    id="primaProfecionalizacion"                     
                    placeholder="ejemplo 450.5"/>
                
                </div>

                <div className="form-group col-3">
                <label className="PrimaHijo">Prima Hijo con Discapacidad</label>
                <input type="double"
                className="form-control "
                    id="primaHijo"                     
                    placeholder="ejemplo 450.5"/>
                
                </div>

                <div className="form-group col-4">
                <label className="PrimaApoyo ">Prima Apoyo Act.Doc. Y de Investigacion</label>
                <input type="double"
                className="form-control "
                    id="primaApoyo"                     
                    placeholder="ejemplo 450.5"/>
                
                </div>

                <div className="form-group col-3">
                <label className="PrimaChoferes ">Prima Choferes y Supervisores</label>
                <input type="double"
                className="form-control "
                    id="primaChoferes"                     
                    placeholder="ejemplo 450.5"/>
                
                </div>

                <div className="form-group col-3">
                <label className="PasoAutomatico ">Paso Automático</label>
                <input type="double"
                className="form-control "
                    id="pasoAutomatico"                     
                    placeholder="ejemplo 450.5"/>
                
                </div>

                <div className="form-group col-3">
                <label className="AporteCaja">Aporte Caja de Ahorro</label>
                <input type="double"
                className="form-control "
                    id="aporteCaja"                     
                    placeholder="ejemplo 450.5"/>
                
                </div>
                </div>
                
                
                </div>
                
                </div>
                
                
                
                
               
                
                <div className="form-group mt-2 "><button type="submit" className="btn btn-primary btn-lg btn-block">Crear Empleado</button></div>
                </fieldset>
                
                </form>
                </div>                
            </div>
         </div>

         
        );
    }
}