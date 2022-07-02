import { InlineWidget } from 'react-calendly'

const Booking = () => {
  return <>
    <h3 className="mt-8 font-bold text-xl text-center">Book a Free Consultation Today</h3>

    <p className="mt-2 text-center text-xs italic opacity-80">
      As of 6/25/2022, I have capacity to take on <strong>4</strong> new clients.
    </p>

    <InlineWidget
      iframeTitle="Book a Free Consultation Today"
      pageSettings={{
        hideGdprBanner: true,
      }}
      prefill={{}}
      styles={{
        height: '700px'
      }}
      url="https://calendly.com/joe-sak/free-consultation"
      utm={{}}
    />
  </>
}

export default Booking
