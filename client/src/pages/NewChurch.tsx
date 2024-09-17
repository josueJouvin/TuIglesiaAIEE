import { Checkbox, Field, Fieldset, Input, Label, Legend} from "@headlessui/react"
import { CheckIcon } from "@heroicons/react/24/outline"
import { Controller, useForm } from "react-hook-form";
import { CHURCH_SERVICES, CHURCH_SERVICES_DAYS } from "../constants/churchServices";
import { HORARIOS_CULTOS_PLACEHOLDER, SELECT_CUSTOM_STYLES } from "../constants/formConstants";

import Select from 'react-select'
import makeAnimated from 'react-select/animated';
import ReactQuill from "react-quill"
import "react-quill/dist/quill.snow.css"
import useCloudinaryWidgets from "../hooks/useCloudinaryWidget";


const NewChurch = () => {
  const { control, handleSubmit} = useForm();
  const animatedComponents = makeAnimated();
  const { openWidget } = useCloudinaryWidgets({folder:"churchImages",maxFiles:5,multiple:true})


  const onSubmit = (data) => {
    console.log(data); // Aquí puedes ver los valores del formulario
  };
  return (
    <>
      <section className="flex-3 overflow-y-scroll">
        <Fieldset>
          <Legend className="text-2xl font-bold">Añade una nueva Iglesia</Legend>
          <div className="mt-8 lg:mr-12 lg:mb-24 ml-0">
            <form onSubmit={handleSubmit(onSubmit)} className="flex justify-between flex-wrap gap-5">
              <Field className="w-[45%] gap-2 lg:w-[30%] flex flex-col lg:gap-1">
                <Label>Nombre de Iglesia</Label>
                <Input name="title" className="p-5 border-solid border-2 border-gray-700 rounded-md" />
              </Field>
              <Field className="w-[45%] gap-2 lg:w-[30%] flex flex-col lg:gap-1">
                <Label>Dirección</Label>
                <Input name="address" className="p-5 border-solid border-2 border-gray-700 rounded-md" />
              </Field>
              <Field className="w-[45%] gap-2 lg:w-[30%] flex flex-col lg:gap-1">
                <Label>Provincia</Label>
                <Input name="province" className="p-5 border-solid border-2 border-gray-700 rounded-md" />
              </Field>
              <Field className="w-[45%] gap-2 lg:w-[30%] flex flex-col lg:gap-1">
                <Label>Ciudad</Label>
                <Input name="city" className="p-5 border-solid border-2 border-gray-700 rounded-md" />
              </Field>
              <Field className="w-[45%] gap-2 lg:w-[30%] flex flex-col lg:gap-1">
                <Label>Parroquia</Label>
                <Input name="parish" className="p-5 border-solid border-2 border-gray-700 rounded-md" />
              </Field>
              <Field className="w-[45%] gap-2 lg:w-[30%] flex flex-col lg:gap-1">
                <Label>Pastor de la Iglesia</Label>
                <Input name="churchPastor" className="p-5 border-solid border-2 border-gray-700 rounded-md" />
              </Field>
              <Field className="w-[45%] gap-2 lg:w-[30%] flex flex-col justify-center lg:gap-1">
                  <Label>Dia Servicio Principal</Label>
                  <Controller
                    name="mainWorship"
                    control={control}
                    defaultValue={[]}
                    render={({ field }) => (
                      <Select
                        {...field}
                        options={CHURCH_SERVICES_DAYS}
                        closeMenuOnSelect={false}
                        components={animatedComponents}
                        styles={SELECT_CUSTOM_STYLES}
                        className="react-select-container"
                        classNamePrefix="react-select"
                        classNames={{
                          control: () => 'p-4 border-solid border-2 rounded-md !border-black',
                          option: () => 'p-2',
                          menu: () => 'mt-1',
                          multiValue: () => 'bg-blue-100 rounded',
                          multiValueLabel: () => 'text-blue-800',
                          multiValueRemove: () => 'text-blue-800 hover:bg-blue-200 hover:text-blue-900',
                        }}
                      />
                    )}
                  />
              </Field>
              <Field className="w-[45%] gap-2 lg:w-[30%] flex flex-col lg:gap-1">
                <Label>Hora Servicio Principal</Label>
                <Input name="mainServiceTime" type="time" className="p-5 border-solid border-2 border-gray-700 rounded-md" />
              </Field>
              <Field className="w-[45%] gap-2 lg:w-[30%] flex flex-col lg:gap-1 ">
                <Label>Fecha de Fundación</Label>
                <Input name="foundation" type="date" className="p-5 border-solid border-2 border-gray-700 rounded-md" />
              </Field>
              <Field className="w-full h-56 flex flex-col gap-2">
                <Label>Horarios de Cultos</Label>
                <ReactQuill placeholder={HORARIOS_CULTOS_PLACEHOLDER} className="quill-wrapper border-black border-2" />
              </Field>
              <Field className="w-full lg:w-[48%] flex flex-col gap-1">
                  <Label>Otros Dias de Servicios</Label>
                  <Controller
                    name="daysServices"
                    control={control}
                    defaultValue={[]}
                    render={({ field }) => (
                      <Select
                        {...field}
                        options={CHURCH_SERVICES_DAYS}
                        closeMenuOnSelect={false}
                        components={animatedComponents}
                        isMulti
                        styles={SELECT_CUSTOM_STYLES}
                        className="react-select-container"
                        classNamePrefix="react-select"
                        classNames={{
                          control: () => 'p-4 border-solid border-2 rounded-md !border-black',
                          option: () => 'p-2',
                          menu: () => 'mt-1',
                          multiValue: () => 'bg-blue-100 rounded',
                          multiValueLabel: () => 'text-blue-800',
                          multiValueRemove: () => 'text-blue-800 hover:bg-blue-200 hover:text-blue-900',
                        }}
                      />
                    )}
                  />
              </Field>
              <Field className="w-full lg:w-[48%] flex flex-col gap-1">
                  <Label>Tipos de Servicios</Label>
                  <Controller
                    name="servicios"
                    control={control}
                    defaultValue={[]}
                    render={({ field }) => (
                      <Select
                        {...field}
                        options={CHURCH_SERVICES}
                        closeMenuOnSelect={false}
                        components={animatedComponents}
                        isMulti
                        styles={SELECT_CUSTOM_STYLES}
                        className="react-select-container"
                        classNamePrefix="react-select"
                        classNames={{
                          control: () => 'p-4 border-solid border-2 rounded-md !border-black',
                          option: () => 'p-2',
                          menu: () => 'mt-1',
                          multiValue: () => 'bg-blue-100 rounded',
                          multiValueLabel: () => 'text-blue-800',
                          multiValueRemove: () => 'text-blue-800 hover:bg-blue-200 hover:text-blue-900',
                        }}
                      />
                    )}
                  />
              </Field>
              <Field className="w-[45%] gap-2 lg:w-[48%] flex flex-col lg:gap-1"> 
                  <Label>Red Social</Label>
                  <Input name="socialMediaLink" type="url" className="p-5 border-solid border-2 border-gray-700 rounded-md" />
              </Field>
              <Field className="w-[45%] gap-2 lg:w-[48%] flex items-center lg:gap-2">
                  <Checkbox name="parking" id="parking" className="group size-6 rounded-md bg-white p-1 ring-1 ring-black ring-inset data-[checked]:bg-white">
                    <CheckIcon className="hidden size-4 fill-white group-data-[checked]:block" />
                  </Checkbox>
                  <Label htmlFor="parking">Estacionamiento disponible</Label>
              </Field>
              <Field className="w-full h-64 flex flex-col gap-2 ">
                <Label>Descripción</Label>
                <ReactQuill className="quill-wrapper border-black border-2"  placeholder="Descripcion sobre tu iglesia, Cual es su Mision, Vision entre otros datos interesantes"/>
              </Field>
              <div className="w-full flex justify-end">
                <button type="submit" className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                  Guardar Iglesia
                </button>
              </div>
            </form>
          </div>
        </Fieldset>
      </section>
      <section className="flex-2 bg-blue-200/75 flex flex-col gap-5 items-center justify-center">
        <div className="flex flex-col gap-2">
          <button className="w-full mt-5 bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 md:w-3/4 lg:w-auto" onClick={openWidget}> Subir Imagenes</button>
          <span>Maximo 5 Imagenes</span>
        </div>
      </section>
    </>
  )
}

export default NewChurch