import {
  Button,
  Field,
  Fieldset,
  Input,
  Select,
} from "@headlessui/react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const SearchBar = () => {
  return (
    <section>
      <span className="bg-black text-white rounded-t-md py-3 px-6 inline-block">
        Iglesia
      </span>
      <Fieldset>
        <form className="md:border md:border-solid md:border-[#999] flex flex-col md:flex-row justify-between h-16 gap-1">
          <Field>
            <Input className="border border-solid border-[#999] md:border-none w-full p-5 md:px-2  md:w-[200px] h-full" name="ciudad" placeholder="Ciudad"/>
          </Field>
          <Field>
            <Input className="border border-solid border-[#999] md:border-none w-full p-5 md:px-2 lg:w-[140px] xl:w-[200px] h-full" name="canton" placeholder="Cantón"/>
          </Field>
          <Field>
            <Select className="border border-solid border-[#999] md:border-none w-full p-5 md:px-2 lg:w-[140px] xl:w-[200px] h-full" name="servicios">
              <option>Servicios</option>
              <option>Sunday Service</option>
              <option>Bible Study</option>
              <option>Youth Group</option>
              <option>Community Outreach</option>
            </Select>
          </Field>
          <Button className="border-none cursor-pointer bg-[#fece51] flex-1">
            <MagnifyingGlassIcon className="size-10 m-auto text-white"/>
          </Button>
        </form>
      </Fieldset>
    </section>
  );
};

export default SearchBar;
