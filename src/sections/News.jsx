import news_img1 from '../assets/images/news_img1.png';
import news_img2 from '../assets/images/news_img2.png';
import news_img3 from '../assets/images/news_img3.png';
import news_img4 from '../assets/images/news_img4.png';
import NewsCard from '../components/NewsCard';

const newsData = [

        {
            image: news_img2,
            title: "The Good People of Akpaku Village are Celebrating the Arrival of a Brand New Borehole",
            date: "May 3, 2024",
            comment:"No Comment"
        },

        {
            image: news_img3,
            title: "Kogi State Government Empowers Rural Miners with New Training Program",
            date: "May 3, 2024",
            comment:"No Comment"
        },

        {
            image: news_img4,
            title: "Rare Earth Element Discovery Sparks Excitement in Mining Community",
            date: "May 3, 2024",
            comment:"No Comment"
        },

]


const News = () => {


  return (
    <div className="padding h-full mb-12 mt-20">

        <div className='flex flex-row justify-between gap-14'>    

            <div className="max-w-[400px] h-full bg-white shadow-3xl" data-aos ="fade-in" data-aos-duration="1000">

                <div><img src={news_img1} alt="new_img" width={400}/></div>
                
                <div className='p-5 mb-10'>
                <h1 className='font-bold text-[18px] mb-4'>Gold prices surge as Global Demand Increases</h1>
                <p className='font-light text-[16px] mb-4'>Gold prices have experienced a significant surge in recent weeks, reaching a six-month high due to increased global demand. The precious metal has seen a 10% increase in value since the start of the year, with prices currently sitting at $1,850 per ounce.</p>
                </div>

                    <div className='border-t-2 border-gray-100'></div>
                <div className='flex justify-between p-5'>
                <p className='font-light text-[16px]'>May 3, 2024</p>
                <p className='font-light text-[16px]'>0 Comment</p>
                </div>
            </div>

            <div>
                <div className='mb-10' data-aos ="fade-in" data-aos-duration="1500">
                <h1 className='font-bold text-[32px] text-primary-blue'>News & Insights</h1>
                <p> Our News and Insight section is your go-to source for staying up-to-date on the latest developments in the world of mining.</p>
                </div>

                <div data-aos ="fade-in" data-aos-duration="2000">
                    {newsData.map((item, index) => (
                            <NewsCard
                                key={index}
                                image ={item.image}
                                title = {item.title}
                                date = {item.date}
                                comment = {item.comment}
                            />
                    ))}
                </div>
            </div>

        </div>
    

    </div>
  )
}

export default News