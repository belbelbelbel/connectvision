import React from 'react'
import Start from './Start'
import Footer from './Footer'

export default function VisionCare() {
    return (
        <div>
            <div className='flex flex-col  py-12 md:max-w-6xl w-[80%]  mx-auto gap-5'>
                <div className='text-5xl mb-3 font-semibold text-[#3D3D3D]'>Pediatric vision care</div>
                <div className='flex gap-5 text-gray-600 flex-col'>
                    <div>
                        {`As a parent, you may wonder whether your preschooler has a vision problem or when you should schedule your child's first eye exam.`}
                    </div>

                    <div>
                        {`Eye exams for children are extremely important, because 5 to 10 percent of preschoolers and 25 percent of school-aged children have vision problems. Early identification of a child's vision problem can be crucial because children often are more responsive to treatment when problems are diagnosed early.`}
                    </div>

                    <div>For school-aged children, the AOA recommends an eye exam every two years if no vision correction is required. Children who need eyeglasses or contact lenses should be examined annually or as recommended by their optometrist or ophthalmologist</div>
                    <div>According to the American Optometric Association (AOA), infants should have their first comprehensive eye exam at 6 months of age. Children then should have additional eye exams at age 3, and just before they enter the first grade — at about age 5 or 6.</div>
                    <div>
                        Early eye exams also are important because children need the following basic skills related to good eyesight for learning:
                    </div>

                    <div>
                        <ul className="list-disc list-inside space-y-2">
                            <li>Near vision</li>
                            <li>Distance vision</li>
                            <li>Binocular (two eyes) coordination</li>
                            <li>Eye movement skills</li>
                            <li>Eye focusing ability</li>
                            <li>Peripheral (side) vision</li>
                            <li>Color vision</li>
                        </ul>
                    </div>


                    For these reasons, some states require a mandatory eye exam for all children entering school for the first time.
                </div>
            </div>
            <Start />
            <Footer />
        </div>
    )
}
