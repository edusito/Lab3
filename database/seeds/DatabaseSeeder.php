<?php
use App\User;
Use App\Forum;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        factory(User::class)->create(['email'=>'esterioor@gmail.com']);
        factory(User::class,50)->create();
        factory(Forum::class,20)->create();
    }
}
