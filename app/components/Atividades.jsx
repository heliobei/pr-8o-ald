"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronDown } from 'lucide-react';

const chapters = [
  {
  title: 'Capítulo 1: Como consumir de maneira sustentável?',
  activities: [
    { 
      title: 'Atividade Extra de Nivelamento - Cap. 1', 
      url: 'https://docs.google.com/forms/d/1A4P7W1Az5ffJ79yaz0SmXmyEOpFVAdShiPyuCbe2ifw/copy' 
    },
    { 
      title: 'Atividade 1.1', 
      url: 'https://docs.google.com/forms/d/1V2ZHoqj66h8qSjmUs91X7siJM6DxgFzxk46D_A0alFs/copy' 
    },
    { 
      title: 'Atividade 1.2', 
      url: 'https://docs.google.com/forms/d/1i4m8PCtHZzfZMo0HjtefltpeYU6JhBnOXKCTV-cjSuE/copy' 
    },
    { 
      title: 'Atividade 1.3', 
      url: 'https://docs.google.com/forms/d/1j620JjOrosR94HLzAYcAXwOQLYxTtDyX_DqO3kg0QHs/copy' 
    },
    { 
      title: 'Atividade 1.4', 
      url: 'https://docs.google.com/forms/d/1_ZyGioqmqzIvZFG8tjo0ikKZ4JOD2dw_SpCf4qoUo-Q/copy' 
    },
    { 
      title: 'Exercícios do Capítulo 1', 
      url: 'https://docs.google.com/forms/d/1Td2JS_SWGLK5ZbFJPlri6iCJeEGWmPu1jDznmlq0Xno/copy' 
    },
  ],
},

{
  title: "Capítulo 2: Como não gastar mais do que deveríamos?",
  activities: [
    { 
      title: "Atividade Extra de Nivelamento - Cap. 2", 
      url: "https://docs.google.com/forms/d/1QzF6NvomB-xhjmYDG12jhYBV-Sd6ZvFt7nnnKkE4B94/copy" 
    },
    { 
      title: "Atividade 2.1", 
      url: "https://docs.google.com/forms/d/1EZKLhJ-sug_kwOOvw85UMqNSe3T5jlA1coNWwXfSCKw/copy" 
    },
    { 
      title: "Atividade 2.2", 
      url: "https://docs.google.com/forms/d/1N_PyorFGgS1b97G-ayIFt8hJrpexo90gv3Ft2TzthmA/copy" 
    },
    { 
      title: "Exercícios do Capítulo 2", 
      url: "https://docs.google.com/forms/d/1idkQC_AC0pJgNPiWDm_wlQbHMkaot6OJPfsPbUl5_UM/copy" 
    },
  ],
},
{
  title: "Capítulo 3: O que você precisa comprar no mercado?",
  activities: [
    { 
      title: "Atividade Extra de Nivelamento - Cap. 3", 
      url: "https://docs.google.com/forms/d/1ASHayk1yWQa-4ob1zG4QE-IbWdz-NQkxBfbA3MTS20Q/copy" 
    },
    { 
      title: "Atividade 3.1", 
      url: "https://docs.google.com/forms/d/1cwWm8vWmOyyk2mTJ71w1oFXptnJQYecRGlcpHozrISY/copy" 
    },
    { 
      title: "Atividade 3.2", 
      url: "https://docs.google.com/forms/d/1JgPakjo60wbUSuiQfVLNL7-fwKna_b7xJcPQcmB0w2Y/copy" 
    },
    { 
      title: "Atividade 3.3", 
      url: "https://docs.google.com/forms/d/1cUFmJdj0rgWATNpiRjXahFlNc8ztwGE-kpXkAf2vL_Y/copy" 
    },
    { 
      title: "Atividade 3.4", 
      url: "https://docs.google.com/forms/d/1wC-aF6nxE4OLiQTzXm0kQyunc3ownNZ9BylGjpu1ZqQ/copy" 
    },
    { 
      title: "Atividade 3.5", 
      url: "https://docs.google.com/forms/d/1ByQ1qku3mdgioPBBbWDa6THzdhHvrnZO6zdldjTcZ2M/copy" 
    },
    { 
      title: "Exercícios do Capítulo 3", 
      url: "https://docs.google.com/forms/d/16dLUQUZ7DDhEPP2D0jZwpUMY5aq6-G0IxK0BzcIr5JI/copy" 
    },
  ],
},


  {
    "title": "Capítulo 4: Os meus direitos como consumidor!",
    "activities": [
      {
        "title": "Atividade Extra de Nivelamento - Cap. 4",
        "url": "https://docs.google.com/forms/d/1FrLIFy0WNlOAKyXBsNRkGZeE1c6n3b1GxpRfEZu_oRU/copy"
      },
      {
        "title": "Atividade 4.1",
        "url": "https://docs.google.com/forms/d/1Jl0sUGPjTUKMXEpcLIuHD5Nc5WLN7rJAgUQxLUFcWOA/copy"
      },
      {
        "title": "Atividade 4.2",
        "url": "https://docs.google.com/forms/d/1WQxW4gdcDbXTsKtO9BMede4u7Gcuz7Fdyj2VP3AHizU/copy"
      },
      {
        "title": "Exercícios do Capítulo 4",
        "url": "https://docs.google.com/forms/d/1E4rW0-MjoUrbW9HpHlToWsYYixlWsQ96_pqJzcWAY7o/copy"
      }
    ]
  },
  {
    "title": "Capítulo 5: Alcançando objetivos em família",
    "activities": [
      {
        "title": "Atividade Extra de Nivelamento - Cap. 5",
        "url": "https://docs.google.com/forms/d/1Kw4Fi_YVUa_b8OgaTmweFDmNid959p7sWDb_nbXXfCE/copy"
      },
      {
        "title": "Atividade 5.1",
        "url": "https://docs.google.com/forms/d/1VHfqbVzfrYgZlHGh249aYYrIDhf3V9eq1HpGJiv_7_M/copy"
      },
      {
        "title": "Atividade 5.2",
        "url": "https://docs.google.com/forms/d/1gV7oiyr5uys9O3HkrSJ4qOTOYUL5jgdS3naNk37Y6o8/copy"
      },
      {
        "title": "Atividade 5.3",
        "url": "https://docs.google.com/forms/d/1hVgwzN3TwT4PhL52SRFIzPT9R-aaFXERXdEyI0or4N0/copy"
      },
      {
        "title": "Atividade 5.4",
        "url": "https://docs.google.com/forms/d/1Mu2_h2Sx9uoIZTEWSqc-odeqySe_ddmqtJJ0N-4ixpM/copy"
      },
      {
        "title": "Atividade 5.5",
        "url": "https://docs.google.com/forms/d/1n9qK9xRA5pjTcNuWRwkYzSK4V33qj7T_DpzxYNUJ9CA/copy"
      },
      {
        "title": "Atividade 5.6",
        "url": "https://docs.google.com/forms/d/1WSLZhoJ1YOub_uJeetO56QAM4YsbPzcvXMzLPl_X81I/copy"
      },
      {
        "title": "Atividade 5.7",
        "url": "https://docs.google.com/forms/d/1QTZ6j0p4drPjC5aofXl-bvmxiLAd7lrG4i22M_4xnxE/copy"
      },
      {
        "title": "Exercícios do Capítulo 5",
        "url": "https://docs.google.com/forms/d/1fnwsUKQi3Hc6_XFyFbH7T7kDmi_SuaShwqglrFZM4MM/copy"
      }
    ]
  },
  {
  "title": "Capítulo 6: Despesas",
  "activities": [
    { "title": "Atividade Extra de Nivelamento - Cap. 6", "url": "https://docs.google.com/forms/d/1StFFdYgNTOk6Pa5q_18YVAPNkCZwdv75UFFIppJni1M/copy" },
    { "title": "Atividade 6.1", "url": "https://docs.google.com/forms/d/1Pk4ulBok2wtmNTwNWQ43-lAPnM8bPlU6fNmON7SojDM/copy" },
    { "title": "Atividade 6.2", "url": "https://docs.google.com/forms/d/1WfT4h1AQOAs8ZYnMiYaOjKxIzl7KgRnnDGqD5YATQuU/copy" },
    { "title": "Atividade 6.3", "url": "https://docs.google.com/forms/d/1JRyAV0HTD2fim_KKEBmU5PabtoB3cw4SPfYZokAGoow/copy" },
    { "title": "Atividade 6.4", "url": "https://docs.google.com/forms/d/1Iy_LN2jyFA3XAgYVQJSrEIq9OOg9kqjC7VlT0r5cbNs/copy" },
    { "title": "Exercícios do Capítulo 6", "url": "https://docs.google.com/forms/d/1PM7GWZDyji5hxl1spJK7dEElPoAouXxgm67tHS9kdYo/copy" }
  ]
},
{
  "title": "Capítulo 7: Tendo uma vida financeira equilibrada",
  "activities": [
    { "title": "Atividade Extra de Nivelamento - Cap. 7", "url": "https://docs.google.com/forms/d/1wi_-p_D-6qp9cgJ5nJZGzUp9e8DtOh80CrGyd3Vz6Ho/copy" },
    { "title": "Atividade 7.1", "url": "https://docs.google.com/forms/d/13W4c7Iqwpu6oztb1AGMOm4erb-mnkqZxPaISrKNIF58/copy" },
    { "title": "Atividade 7.2", "url": "https://docs.google.com/forms/d/1q7QSkeWTw_uSYcTsaNXlrK9KKARM5ek7kWfD3bWkF2s/copy" },
    { "title": "Atividade 7.3", "url": "https://docs.google.com/forms/d/1qVnDvGhxSbqDrmhwmA0gbjqjcGVQ-DAyVVtFItLX86I/copy" },
    { "title": "Atividade 7.4", "url": "https://docs.google.com/forms/d/19CsiULSxzQUfN_i79F30H3UbotLsUoU4r40K0c8Zs5k/copy" },
    { "title": "Atividade 7.5", "url": "https://docs.google.com/forms/d/1bgAKzRE1Ux2ac2ev_blN2m0h_iwCv2qRmUELtoSHCBU/copy" },
    { "title": "Atividade 7.6", "url": "https://docs.google.com/forms/d/1o2Ich7l3aEI_wfn99mEtSPLTuI52yGzBUOKAmAZ9zhg/copy" },
    { "title": "Atividade 7.7", "url": "https://docs.google.com/forms/d/1dsUM0yz7RcbckS-uvL6keYIViCBaAvRRjTykRSWMZuI/copy" },
    { "title": "Atividade 7.8", "url": "https://docs.google.com/forms/d/1GvV7VjZykbvLeJBuC322xAxzym8hVFRs9ntVFIxFj1Y/copy" },
    { "title": "Atividade 7.9", "url": "https://docs.google.com/forms/d/1_6cE_CFw3dmB2nhV27i9zQsn2TDEXWb6M05lu-rpJRc/copy" },
    { "title": "Exercícios do Capítulo 7", "url": "https://docs.google.com/forms/d/1ht2v4i6IUgRpzzLFNsh1o8hjUU1KVDXkjbI9iDUPKJA/copy" }
  ]
},
  {
    "title": "Capítulo 8: Realizando sonhos com o dinheiro guardado",
    "activities": [
      { "title": "Atividade Extra de Nivelamento - Cap. 8", "url": "https://docs.google.com/forms/d/1PKBYMLi5Z1npqPC5gxjIIioJSb3XFD0mIuPwpiJG2rk/copy" },
      { "title": "Atividade 8.1", "url": "https://docs.google.com/forms/d/16BYYGEmIH0t3Uk1yPeLsiqABNxb8942v-7OdtLtxaZI/copy" },
      { "title": "Atividade 8.2", "url": "https://docs.google.com/forms/d/1IwSnPjQHMQptpJj7dd8HDaVShPleKCHvjrDqffYU9l8/copy" },
      { "title": "Atividade 8.3", "url": "https://docs.google.com/forms/d/1cn2zFZx59_t3rUgIPfsJdA0JNIKpi58Sn0XfXnB3F5c/copy" },
      { "title": "Atividade 8.4", "url": "https://docs.google.com/forms/d/12P4LTiKEID2oIPXh_cU2CVvssda0Is15z4nSK0WYG-A/copy" },
      { "title": "Atividade 8.5", "url": "https://docs.google.com/forms/d/1BwCHjKQVCoToyXEcGro09ZUotGlesJaI61GQqORes-U/copy" },
      { "title": "Exercícios do Capítulo 8", "url": "https://docs.google.com/forms/d/1f5kABsHWY6KNdAsh-RtuI_5JyTn5N5GzjmzgIbMgGac/copy" }
    ]
  },
  {
    "title": "Capítulo 9: Juros: dívidas e investimentos",
    "activities": [
      { "title": "Atividade Extra de Nivelamento - Cap. 9", "url": "https://docs.google.com/forms/d/1Q4WIbblZOGhnNVVV2Mccypb0bv2HhsXP9bHrPCtwMDg/copy" },
      { "title": "Atividade 9.1", "url": "https://docs.google.com/forms/d/1eCrVv1hqI0zLCs_Q93Abc4QoT5RD06sYpBtoWz8cHOw/copy" },
      { "title": "Atividade 9.2", "url": "https://docs.google.com/forms/d/19lrVAYdHRcHefKySfYElRl8XlsQfyYlCCwyPxSzBjPU/copy" },
      { "title": "Atividade 9.3", "url": "https://docs.google.com/forms/d/1F01kTOs_Cpg0g8HBrff1VcrVDb5_gGZPd5fkRlTqhb0/copy" },
      { "title": "Atividade 9.4", "url": "https://docs.google.com/forms/d/1fqdxefqu8Y_MOs1kGtCpOuqNPB8JyGyFsJnZGET6xEs/copy" },
      { "title": "Atividade 9.5", "url": "https://docs.google.com/forms/d/1XMj8ndhjlnqwqO4HAd1x1I1Pzqg0qq0HGbTP0OFD5CQ/copy" },
      { "title": "Atividade 9.6", "url": "https://docs.google.com/forms/d/1TKlu8eXOXOcMQmduTmML6FxleIIm3Z8LG80VnljP9D8/copy" },
      { "title": "Exercícios do Capítulo 9", "url": "https://docs.google.com/forms/d/1UeCWpv3o-tmr_ol2R4cZ1Xz9S6YcCbjZf_hirgBGf5U/copy" }
    ]
  },
  {
    "title": "Capítulo 10: Inflação",
    "activities": [
      { "title": "Atividade Extra de Nivelamento - Cap. 10", "url": "https://docs.google.com/forms/d/1cT3EYrLTbMkFojowL8QoliTzvdaSeivZWdtQiojrvZk/copy" },
      { "title": "Atividade 10.1", "url": "https://docs.google.com/forms/d/1qk4ENqPSeipBTIpGnH3KzTLUr5hc8-B-WeB4yV256ZA/copy" },
      { "title": "Exercícios do Capítulo 10", "url": "https://docs.google.com/forms/d/1QAgKNLTK6PlcqwvoFdaUC1pqXNYPVniqQK5Kzd4bvtg/copy" }
    ]
  },
{
    "title": "Capítulo 11: Construindo redes solidárias",
    "activities": [
      {
        "title": "Atividade Extra de Nivelamento - Cap. 11",
        "url": "https://docs.google.com/forms/d/10ljJnivPCsDWqVi4B-NySeblZaSlxUY3G5EKgcSJjYU/copy"
      },
      {
        "title": "Atividade 11.1",
        "url": "https://docs.google.com/forms/d/1ampzBaKvVxH1sbdLPROqrQMvyHbecUpzO6AQztFgFEI/copy"
      },
      {
        "title": "Atividade 11.2",
        "url": "https://docs.google.com/forms/d/1KgAKbTeKi2ZVvl-APUy-TS3tGhojghd6IofV-K_ux0Y/copy"
      },
      {
        "title": "Exercícios do Capítulo 11",
        "url": "https://docs.google.com/forms/d/1m4PYKboP2lhctOHEVM4P_-4PFcfc9gdyWIcgIKE-pNM/copy"
      }
    ]
  },
  {
    "title": "Capítulo 12: Celebrando tudo que aprendemos",
    "activities": [
      {
        "title": "Atividade Extra de Nivelamento - Cap. 12",
        "url": "https://docs.google.com/forms/d/1lXrbLbJDKIse-PrOfYQMC2nNG47CaXcW7xx8Jd-JS6A/copy"
      },
      {
        "title": "Atividade 12.1",
        "url": "https://docs.google.com/forms/d/1RU_C5DnZbR-eRbs4Op-PBU05k3ZLHHvcyhVns4Emj4A/copy"
      }
    ]
  }
  
];

export default function Atividades() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-6 mb-8">
      {chapters.map((chapter, index) => (
        <div
          key={index}
          className="border border-gray-200 rounded-2xl shadow-lg overflow-hidden bg-white transition-all duration-300"
        >
          <button
            className="w-full flex justify-between items-center p-4 bg-gradient-to-r from-sky-100 via-emerald-50 to-blue-100 hover:brightness-105"
            onClick={() => toggle(index)}
          >
            <h2 className="text-lg font-semibold text-gray-800">{chapter.title}</h2>
            <motion.div animate={{ rotate: openIndex === index ? 180 : 0 }} transition={{ duration: 0.3 }}>
              <ChevronDown className="h-5 w-5 text-blue-500" />
            </motion.div>
          </button>

          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4 bg-white">
                  {chapter.activities.map((activity, i) => (
                    <Card
                      key={i}
                      className="rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
                    >
                      <CardContent className="p-4">
                        <a
                          href={activity.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800 font-medium underline underline-offset-2"
                        >
                          {activity.title}
                        </a>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
