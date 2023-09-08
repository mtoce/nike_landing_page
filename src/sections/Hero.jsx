import Button from '../components/Button';
import { arrowRight } from '../assets/icons';
import { statistics } from '../constants';

const Hero = () => {
  return (
    <section id="home" className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container border-2 border-red-500">
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-coral-red font-palanquin text-xl">Our Summer Collections</p>
        <h1 className="">
          <span className="">The New Arrival</span>
          <br />
          <span>Nike</span>Shoes
        </h1>
        <p>Discover stylish Nike arrivals, quality comfort, and innovation for your active life.</p>
        <Button label="Shop now" iconURL={arrowRight}/>

        <div className='flex justify-start items-start flex-wrap w-full mt-20 gap-16'>
          {/* TODO: map over statistics  */}
        </div>
      </div>

    </section>
  )
}

export default Hero