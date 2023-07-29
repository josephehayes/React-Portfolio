import React, { memo, forwardRef } from 'react';
import { Grid } from '@mui/material';
import FirstPortfolioCard from '../projects/firstPortfolio';
import NBATrackerCard from '../projects/NBATracker';
import MealerDealerCard from '../projects/mealerDealer';
import InsulinkCard from '../projects/insuLink';

const ProjectsList = forwardRef((props, ref) => {
    const { style } = props;

    return (
        <Grid container
            id='proj-container'
            direction={'column'}
            // alignContent={'space-between'}
            // justifyContent={'space-between'}
            rowSpacing={6}
            // spacing={12}
            ref={ref}
            style={style}
            sx={{ display: 'flex', marginTop: 0, paddingLeft: 0, paddingRight: 0 }}
        >
            <Grid container item
                id='proj-top-row'
                justifyContent={'space-between'}
                // rowSpacing={4}
                // spacing={12}
            >
                <Grid item className='projCard' >
                    <InsulinkCard />
                </Grid>
                <Grid item  className='projCard'>
                    <MealerDealerCard />
                </Grid>
            </Grid>
            <Grid container item
                id='proj-bottom-row'
                justifyContent={'space-between'}
                // rowSpacing={4}
            >
                <Grid item  className='projCard'>
                    <NBATrackerCard />
                </Grid>
                <Grid item  className='projCard'>
                    <FirstPortfolioCard />
                </Grid>
            </Grid>
        </Grid>
    );
});

export default memo(ProjectsList);