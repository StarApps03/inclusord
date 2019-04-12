<?php
use App\User;

use Illuminate\Database\Seeder;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
        'name' => "Jhony Alexander",
        'userName' => 'Boyaca Nova',
        'email' => "jhonnova19@gmail.com",
        'email_verified_at' => now(),
        'api_token' => str_random(60),
        'password' => Hash::make('12345')
        ]);
    }
}
