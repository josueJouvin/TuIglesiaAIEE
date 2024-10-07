import { Checkbox, Field, Fieldset, Input, Label, Legend} from "@headlessui/react"
import { CheckIcon } from "@heroicons/react/24/outline"
import { Controller, useForm } from "react-hook-form";
import { CHURCH_SERVICES, CHURCH_SERVICES_DAYS } from "../constants/churchServices";
import { HORARIOS_CULTOS_PLACEHOLDER, SELECT_CUSTOM_STYLES } from "../constants/formConstants";
import { postChurch } from "../types";
import { zodResolver } from "@hookform/resolvers/zod";
import { PostChurchSchema } from "../schema/church.schema";

import Select from 'react-select'
import makeAnimated from 'react-select/animated';
import ReactQuill from "react-quill"
import "react-quill/dist/quill.snow.css"
import useCloudinaryWidgets from "../hooks/useCloudinaryWidget";
import Error from "../components/Error";


const NewChurch = () => {
  const animatedComponents = makeAnimated();
  const { openWidget } = useCloudinaryWidgets({folder:"churchImages",maxFiles:5,multiple:true})
  const { control, register, formState:{ errors }, reset, handleSubmit} = useForm<postChurch>({resolver: zodResolver(PostChurchSchema)});

  const onSubmit = (data) => {

    console.log(data); // Aquí puedes ver los valores del formulario
    reset()
  };
  return (
    <>
      <section className="flex-3 lg:overflow-y-scroll">
        <Fieldset>
          <Legend className="text-2xl font-bold">Añade una nueva Iglesia</Legend>
          <div className="mt-8 lg:mr-12 lg:mb-24 ml-0">
            <form onSubmit={handleSubmit(onSubmit)} className="flex justify-between flex-wrap gap-5">
              <Field className="w-[45%] gap-2 lg:w-[30%] flex flex-col lg:gap-1">
                <Label>Nombre de Iglesia</Label>
                <Input className="p-5 border-solid border-2 border-gray-700 rounded-md" placeholder="Iglesia AIEE" {...register("title")}/>
                {errors.title && <Error>{errors.title?.message}</Error>}
              </Field>
              <Field className="w-[45%] gap-2 lg:w-[30%] flex flex-col lg:gap-1">
                <Label>Dirección</Label>
                <Input className="p-5 border-solid border-2 border-gray-700 rounded-md" placeholder="Av. 2 y avei 13" {...register("address")} />
                {errors.address && <Error>{errors.address?.message}</Error>}
              </Field>
              <Field className="w-[45%] gap-2 lg:w-[30%] flex flex-col lg:gap-1">
                <Label>Provincia</Label>
                <Input className="p-5 border-solid border-2 border-gray-700 rounded-md" placeholder="Guayas, Pichincha, Azuay" {...register("province")} />
                {errors.province && <Error>{errors.province?.message}</Error>}
              </Field>
              <Field className="w-[45%] gap-2 lg:w-[30%] flex flex-col lg:gap-1">
                <Label>Ciudad</Label>
                <Input className="p-5 border-solid border-2 border-gray-700 rounded-md" placeholder="Guayaquil, Quito, Cuenca" {...register("city")}/>
                {errors.city && <Error>{errors.city?.message}</Error>}
              </Field>
              <Field className="w-[45%] gap-2 lg:w-[30%] flex flex-col lg:gap-1"> 
                  <Label>Red Social</Label>
                  <Input type="url" className="p-5 border-solid border-2 border-gray-700 rounded-md" placeholder="https://facebook/page.com" {...register("socialMediaLink")}/>
                  {errors.socialMediaLink && <Error>{errors.socialMediaLink?.message}</Error>}
              </Field>
              <Field className="w-[45%] gap-2 lg:w-[30%] flex flex-col lg:gap-1">
                <Label>Pastor de la Iglesia</Label>
                <Input className="p-5 border-solid border-2 border-gray-700 rounded-md" placeholder="Pastor" {...register("churchPastor")} />
                {errors.churchPastor && <Error>{errors.churchPastor?.message}</Error>}
              </Field>
              <Field className="w-[45%] gap-2 lg:w-[30%] flex flex-col justify-center lg:gap-1">
                  <Label>Dia Servicio Principal</Label>
                  <Controller
                    name="mainWorship"
                    control={control}
                    defaultValue={""}
                    render={({ field }) => (
                      <Select
                        {...field}
                        options={CHURCH_SERVICES_DAYS}
                        closeMenuOnSelect={true}
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
                  {errors.mainWorship && <Error>{errors.mainWorship?.message}</Error>}
              </Field>
              <Field className="w-[45%] gap-2 lg:w-[30%] flex flex-col lg:gap-1">
                <Label>Hora Servicio Principal</Label>
                <Input type="time" className="p-5 border-solid border-2 border-gray-700 rounded-md" {...register("mainServiceTime")} />
                {errors.mainServiceTime && <Error>{errors.mainServiceTime?.message}</Error>}
              </Field>
              <Field className="w-[45%] gap-2 lg:w-[30%] flex flex-col lg:gap-1 ">
                <Label>Fecha de Fundación</Label>
                <Input type="date" className="p-5 border-solid border-2 border-gray-700 rounded-md" {...register("foundation")} />
                {errors.foundation && <Error>{errors.foundation?.message}</Error>}
              </Field>
              <Field className="w-full h-56 flex flex-col gap-2">
                <Label>Horarios de Cultos</Label>
                <Controller
                  name="servicesTimes"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <ReactQuill
                      {...field}
                      placeholder={HORARIOS_CULTOS_PLACEHOLDER}
                      className="quill-wrapper border-black border-2"
                    />
                  )}
                />
                {errors.servicesTimes && <Error>{errors.servicesTimes?.message}</Error>}
              </Field>
              <Field className="w-full lg:w-[48%] flex flex-col gap-1">
                  <Label>Otros Dias de Servicios</Label>
                  <Controller
                    name="servicesDays"
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
                  {errors.servicesDays && <Error>{errors.servicesDays?.message}</Error>}
              </Field>
              <Field className="w-full lg:w-[48%] flex flex-col gap-1">
                  <Label>Tipos de Servicios</Label>
                  <Controller
                    name="servicesTypes"
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
                  {errors.servicesTypes && <Error>{errors.servicesTypes?.message}</Error>}

              </Field>
              <Field className="w-[45%] gap-2 lg:w-[48%] flex items-center lg:gap-2">
                <Controller
                  name="parking"
                  control={control}
                  defaultValue={false}  // Valor inicial
                  render={({ field }) => (
                    <Checkbox
                      checked={field.value}
                      onChange={field.onChange}
                      className={`group size-6 rounded-md bg-white p-1 ring-1 ring-black ring-inset ${
                        field.value ? 'bg-blue-500' : 'bg-white'
                      }`}
                    >
                      {field.value && <CheckIcon className="size-4 fill-white" />}
                    </Checkbox>
                  )}
                />
                  <label htmlFor="parking">Estacionamiento disponible</label>
              </Field>

              <Field className="w-full h-64 flex flex-col gap-2 ">
                {errors.parking && <Error>{errors.parking?.message}</Error>}
                <Label>Descripción</Label>
                <Controller
                  name="description"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <ReactQuill
                      {...field}
                      placeholder="Descripcion sobre tu iglesia, Cual es su Mision, Vision entre otros datos interesantes"
                      className="quill-wrapper border-black border-2"
                    />
                  )}
                />
                {errors.description && <Error>{errors.description?.message}</Error>}

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