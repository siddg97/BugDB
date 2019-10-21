import React, { Component } from 'react';
import { Button, Grid, Divider, Segment, Header, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class Landing extends Component {
	render() {
		return (
			<Grid stackable textAlign='center' style={{minHeight:'100vh',margin:0}} verticalAlign='middle'>
				<Grid.Row color='black'>
					<Grid.Column mobile={14} tablet={12} computer={8} widescreen={8}>
						<Header color='olive'>
							Welcome to Links!
						</Header>
						<Segment placeholder>
					    <Grid columns={2} centered stackable textAlign='center'>
					      <Divider vertical>Or</Divider>
					      <Grid.Row verticalAlign='middle'>
					        <Grid.Column textAlign='center'>
					          <Header icon>
					            <Icon name='user circle' />
					            Already a user?
					          </Header>
										<Link to='/login'>
											<Button size='large' color='olive'> Login </Button>
										</Link>
					        </Grid.Column>
					        <Grid.Column textAlign='center'>
					          <Header icon>
					            <Icon name='user plus' />
					            New user?
					          </Header>
										<Link to='/register'>
											<Button size='large' color='red'> Register </Button>
										</Link>
					        </Grid.Column>
					      </Grid.Row>
					    </Grid>
					  </Segment>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		);
	}
}

export default Landing
