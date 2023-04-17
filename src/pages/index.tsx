import Image from 'next/image'
import randomImg from '@/img/randomgame.jpeg'
import { useState } from 'react'
import Head from 'next/head'

const getRandomIntInclusive = (max: number) => {
  const min = Math.ceil(1);
  const floorMax = Math.floor(max);
  return Math.floor(Math.random() * (floorMax - min + 1)) + min; //최댓값도 포함, 최솟값도 포함
}

const getRandomIntArray = (max: number, choose: number) => {
  const tmpSet = new Set<number>([])
  while (tmpSet.size < choose) {
    tmpSet.add(getRandomIntInclusive(max))
  }
  return Array.from(tmpSet)
}

export default function RandomChoose() {
  const [choosed, setChoosed] = useState(false)

  const formInitValue = {
    max: '',
    choose: '',
  }

  const [results, setResults] = useState<number[]>([])

  const [formInfo, setFormInfo] = useState(formInitValue)

  const onFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormInfo((prev) => ({ ...prev, [name]: value }))
  }

  const onChoose = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const result = Object.keys(formInfo).map((key) => {
      if (formInfo[key as keyof typeof formInitValue] === '') {
        return false
      }
      return true
    })
    if (result.filter((item) => item === false).length > 0) {
      alert('모든 항목을 입력해주세요.')
      return
    }
    setResults(getRandomIntArray(Number(formInfo.max), Number(formInfo.choose)))
    setChoosed(true)
  }

  const onReset = () => {
    setFormInfo(formInitValue)
    setChoosed(false)
    setResults([])
  }

  return (
    <>
      <Head>
        <title>큐트큐트 현징이의❤️</title>
      </Head>
      <div className="isolate bg-white py-24 px-6 sm:py-32 lg:px-8">
        <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
          <svg
            className="relative left-1/2 -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-40rem)] sm:h-[42.375rem]"
            viewBox="0 0 1155 678"
          >
            <path
              fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
              fillOpacity=".3"
              d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
            />
            <defs>
              <linearGradient
                id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
                x1="1155.49"
                x2="-78.208"
                y1=".177"
                y2="474.645"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#9089FC" />
                <stop offset={1} stopColor="#FF80B5" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">두근두근 랜덤뽑기</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600 font-nanumBGothic">
            현징이가~ 만드는~❤️ 랜덤 게임!!!
          </p>
          {/* <p className="mt-2 text-lg leading-8 text-gray-600 font-nanumBGothic">
          숫자 뽑기를 통해 랜덤으로 당첨자들을 뽑아보세요.
        </p> */}
        </div>
        <form className="mx-auto mt-16 max-w-xl sm:mt-20 font-nanumBGothic">
          <div className="grid grid-cols-1 gap-y-6 gap-x-8 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold leading-6 text-gray-900">
                전체 인원 수
              </label>
              <div className="mt-2.5">
                <input
                  type="number"
                  name="max"
                  id="max"
                  required
                  className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={formInfo.max}
                  onChange={onFormChange}
                  placeholder="1000"
                />
              </div>
            </div>
            <div>
              <label htmlFor="company" className="block text-sm font-semibold leading-6 text-gray-900">
                추첨 인원 수
              </label>
              <div className="mt-2.5">
                <input
                  type="number"
                  name="choose"
                  id="choose"
                  required
                  className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={formInfo.choose}
                  onChange={onFormChange}
                  placeholder="3"
                />
              </div>
            </div>
          </div>
          <div className="mt-10">
            <button
              type="submit"
              className="block w-full rounded-md bg-slate-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={onChoose}
            >
              {choosed ? '다시 뽑기' : '뽑기'}
            </button>
            {choosed && <button
              type="submit"
              className="mt-2 block w-full rounded-md bg-red-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={onReset}
            >
              초기화
            </button>}
          </div>
        </form>
        <div className='max-w-xl mx-auto p-5 mt-5 block w-full rounded-md border-sky-200 border-[1px] min-h-[120px] shadow-sm'>
          {results.map((item) => (
            <>
              <span
                className='inline-block px-3 py-1.5 text-sm font-semibold text-gray-900 bg-slate-200 rounded-md mr-2 mb-2'
              >{item}</span>
              <span> </span>
            </>
          ))}
        </div>
        <div className='max-w-xl mx-auto block mt-5'>
          <Image className="w-auto" src={randomImg} alt="misthios logo" placeholder="blur" />
        </div>
      </div>
    </>
  )
}
