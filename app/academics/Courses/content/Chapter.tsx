import React from 'react'
import placeholderImage from '@/public/logo/code.png'
import Image from 'next/image'

function Chapter() {
  return (
    //chapter contents
    <div className='h-full mb-2 w-full overflow-y-scroll  ' >
    <Image className='w-[90%] mx-auto h-[350px] mt-6  ' src={placeholderImage} alt="placeholder"  />
   <p className='p-2 w-[90%] mx-auto  ' >
   n the contemporary data-driven landscape, data visualization has transitioned from a discretionary skill to an essential one for managers. The rapid influx of data necessitates visual abstraction for comprehension and informed decision-making. For instance, Boeing's Osprey program generates immense data volumes, demanding visualization to detect inefficiencies. Moreover, even non-statistical information, such as complex business processes and customer flows, benefits from visual representation. Affordable tools and internet accessibility have democratized data visualization, but the passage advises against mindless chart creation. Instead, it emphasizes storytelling through visuals. Successful visualization requires strategic planning beyond mere adherence to rules, recognizing it as a multifaceted skill set.
Growing importance of visual literacy for knowledge workers, it's crucial to approach data visualization with strategy rather than jumping straight into execution. While inexpensive tools make it easy to create simple charts, visualization should be viewed as a versatile and powerful way to explore ideas and convey information effectively. To succeed in visual communication, start by answering two fundamental questions: Is the information conceptual or data-driven, and are you declaring something or exploring something? This distinction guides your choice of resources, tools, and the type of visualization to achieve your specific goals. Most managers primarily use declarative visualizations, making statements to formal audiences, such as presenting quarterly sales data from a spreadsheet.
Exploring reasons for the sales team's recent performance dip, your visualization purpose becomes exploratory. You'll use the same data to create visuals to either confirm or refute your hypothesis, typically for yourself or a small team. If your hypothesis is validated, you might transition to a declarative visualization for your boss. Exploratory visualizations come in two forms: hypothesis testing and data brainstorming, where you mine data for emerging patterns or insights.
 
The "consultants' corner" represents a quadrant of visual communication, characterized by idea illustration, where consultants often employ process and cycle diagrams to simplify complex concepts through metaphors and design conventions. Clear and simple design is crucial in idea illustration, as it relies on metaphorical representations. Consultants use this approach when explaining intricate processes or techniques, like the pyramid search method.
<Image src={placeholderImage} alt="holder" className='w-[80%] h-[200px] mx-auto ' /> 
The article's typology encompasses four types of visual communication: idea illustration, idea generation, visual discovery, and everyday dataviz, defined by combining the nature (conceptual or data-driven) and purpose (declarative or exploratory) of the visualization.
The axes of the pyramid search visualization employ easily grasped conventions, such as industries plotted from near to far and expertise mapped from low to high.
n the contemporary data-driven landscape, data visualization has transitioned from a discretionary skill to an essential one for managers. The rapid influx of data necessitates visual abstraction for comprehension and informed decision-making. For instance, Boeing's Osprey program generates immense data volumes, demanding visualization to detect inefficiencies. Moreover, even non-statistical information, such as complex business processes and customer flows, benefits from visual representation. Affordable tools and internet accessibility have democratized data visualization, but the passage advises against mindless chart creation. Instead, it emphasizes storytelling through visuals. Successful visualization requires strategic planning beyond mere adherence to rules, recognizing it as a multifaceted skill set.
Growing importance of visual literacy for knowledge workers, it's crucial to approach data visualization with strategy rather than jumping straight into execution. While inexpensive tools make it easy to create simple charts, visualization should be viewed as a versatile and powerful way to explore ideas and convey information effectively. To succeed in visual communication, start by answering two fundamental questions: Is the information conceptual or data-driven, and are you declaring something or exploring something? This distinction guides your choice of resources, tools, and the type of visualization to achieve your specific goals. Most managers primarily use declarative visualizations, making statements to formal audiences, such as presenting quarterly sales data from a spreadsheet.
Exploring reasons for the sales team's recent performance dip, your visualization purpose becomes exploratory. You'll use the same data to create visuals to either confirm or refute your hypothesis, typically for yourself or a small team. If your hypothesis is validated, you might transition to a declarative visualization for your boss. Exploratory visualizations come in two forms: hypothesis testing and data brainstorming, where you mine data for emerging patterns or insights.
<Image src={placeholderImage} alt="holder" className='w-[80%] h-[200px] mx-auto ' /> 
The "consultants' corner" represents a quadrant of visual communication, characterized by idea illustration, where consultants often employ process and cycle diagrams to simplify complex concepts through metaphors and design conventions. Clear and simple design is crucial in idea illustration, as it relies on metaphorical representations. Consultants use this approach when explaining intricate processes or techniques, like the pyramid search method.
 
The article's typology encompasses four types of visual communication: idea illustration, idea generation, visual discovery, and everyday dataviz, defined by combining the nature (conceptual or data-driven) and purpose (declarative or exploratory) of the visualization.
The axes of the pyramid search visualization employ easily grasped conventions, such as industries plotted from near to far and expertise mapped from low to high.
   </p>
    {/* chapter switch */}
    <div className='w-[96%] mx-auto   flex flex-row justify-between' >
      {/*previous chapter*/}
      <button className='btn background text-[#e1b382] ' >prev</button>
      {/*next chapter*/}
      <button className='btn background text-[#e1b382]' >next</button>
    </div>
    </div>
  )
}

export default Chapter