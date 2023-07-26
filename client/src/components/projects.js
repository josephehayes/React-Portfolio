import React, { memo } from 'react';
import { Grid } from '@mui/material';
import FirstPortfolioCard from '../projects/firstPortfolio';
import NBATrackerCard from '../projects/NBATracker';
import MealerDealerCard from '../projects/mealerDealer';
import InsulinkCard from '../projects/insuLink';

const ProjectsList = memo(function ProjectsList() {
    return (
        <Grid container
            id='proj-container'
            direction={'column'}
            alignContent={'center'}
            justifyContent={'space-around'}
            rowSpacing={6}
            sx={{ marginTop: 0 }}
        >
            <Grid container item
                id='proj-top-row'
                justifyContent={'space-evenly'}
                rowSpacing={4}
            >
                <Grid item >
                    <InsulinkCard />
                </Grid>
                <Grid item >
                    <MealerDealerCard />
                </Grid>
            </Grid>
            <Grid container item
                id='proj-bottom-row'
                justifyContent={'space-evenly'}
                rowSpacing={4}
            >
                <Grid item >
                    <NBATrackerCard />
                </Grid>
                <Grid item >
                    <FirstPortfolioCard />
                </Grid>
            </Grid>
        </Grid>
    );
});

export default ProjectsList;