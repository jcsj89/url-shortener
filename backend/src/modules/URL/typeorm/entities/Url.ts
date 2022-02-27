import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('urls')
class Url {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    long: string;

    @Column()
    short: string;

    @CreateDateColumn()
    created_at: Date;

    @CreateDateColumn()
    updated_at: Date;
}

export default Url;
