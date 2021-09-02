<?php

namespace Database\Seeders;

use App\Models\Movie;
use Illuminate\Database\Seeder;

class MoviesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Movie::truncate(); //elimina la tabla en caso de que exista

        $faker = \Faker\Factory::create(); //Genera place holders, permite generar datos de los distintos tipos 
        //sentence coloca una pequeña oración
        //paragraph coloca un parrafo
        //randomDigit crea un digito


        for($i = 0; $i<10 ; $i++){
            Movie::create([
                'title'=> $faker->sentence,
                'synopsis'=> $faker->paragraph,
                'year' => $faker->randomDigit,
                'cover'=>$faker->sentence
            ]);
        }
    }
}
