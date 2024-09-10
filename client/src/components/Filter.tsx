import { Button, Field, Fieldset, Input, Legend, Select,  } from "@headlessui/react";
import { CustomLabel } from "./Form/CustomLabel";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const Filter = () => {
  return (
    <Fieldset>
      <form className="flex flex-col gap-2">
        <Legend className="text-2xl font-light ">
          Resultados de la búsqueda en:{" "}
          <strong className="font-bold">Cuenca</strong>
        </Legend>
        <Field className="flex flex-col gap-1">
          <CustomLabel text="Nombre de Iglesia:" htmlFor="iglesia" />
          <Input
            className="w-full p-3 border border-solid border-gray-300 rounded-md text-sm"
            name="iglesia"
            id="iglesia"
            placeholder="Iglesia biblica el buen pastor"
          />
        </Field>
        <div className="flex justify-between flex-wrap gap-5">
          <Field className="flex flex-col gap-1">
            <CustomLabel text="Pastor" htmlFor="pastor" />
            <Input
              className="w-28 p-3 border border-solid border-gray-300 rounded-md text-sm"
              name="pastor"
              id="pastor"
              placeholder="Juan Alcacer"
            />
          </Field>
          <Field className="flex flex-col gap-1">
            <CustomLabel text="Provincia" htmlFor="provincia" />
            <Input
              className="w-28  p-3 border border-solid border-gray-300 rounded-md text-sm"
              name="provincia"
              id="provincia"
              placeholder="Guayas, Santa Elena, Pichincha"
            />
          </Field>
          <Field className="flex flex-col gap-1">
            <CustomLabel text="Cantón" htmlFor="canton" />
            <Input
              className="w-28  p-3 border border-solid border-gray-300 rounded-md text-sm"
              name="canton"
              id="canton"
              placeholder="Guayaquil, Quito"
            />
          </Field>
          <Field className="flex flex-col gap-1">
            <CustomLabel text="Tipos de servicios" htmlFor="servicios" />
            <Select
              className="w-28  p-3 border border-solid border-gray-300 rounded-md text-sm"
              id="servicios"
              name="servicios"
            >
              <option value="">Servicios</option>
              <option value="culto-dominical">Culto Dominical</option>
              <option value="estudio-biblico">Estudio Bíblico</option>
              <option value="grupo-jovenes">Grupo de Jóvenes</option>
              <option value="escuela-dominical">Escuela Dominical</option>
              <option value="oracion">Reunión de Oración</option>
              <option value="alabanza">Servicio de Alabanza</option>
              <option value="ministerio-ninos">Ministerio de Niños</option>
              <option value="alcance-comunitario">Alcance Comunitario</option>
              <option value="grupo-mujeres">Grupo de Mujeres</option>
              <option value="grupo-hombres">Grupo de Hombres</option>
            </Select>
          </Field>
          <Field className="flex flex-col gap-1">
            <CustomLabel text="Días de culto" htmlFor="dia" />
            <Select
              className="w-28  p-3 border border-solid border-gray-300 rounded-md text-sm"
              id="dia"
              name="dia"
            >
              <option value="">Seleccione un día</option>
              <option value="lunes">Lunes</option>
              <option value="martes">Martes</option>
              <option value="miercoles">Miércoles</option>
              <option value="jueves">Jueves</option>
              <option value="viernes">Viernes</option>
              <option value="sabado">Sábado</option>
              <option value="domingo">Domingo</option>
            </Select>
          </Field>
          <Button className="border-none bg-[#fece51] w-[100px] h-14 p-2 mt-auto">
            <MagnifyingGlassIcon className="size-8 mx-auto text-white"/>
          </Button>
        </div>
      </form>
    </Fieldset>
  );
};

export default Filter;
